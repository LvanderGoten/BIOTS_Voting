// 0x211b1b6e61e475ace9bf13ae79373ddb419b5f72
// 0xbebebebebebebebebebebebebebebebebebebebe

// TODO Token so only can vote once

contract votingSystem {
        //Variables
        mapping(address => uint) num_votes;    //number of votes for a candidate 
        mapping(address => address) voters;                                     //still need this
        mapping(address => bool) voted;
        
        address[] public candidates;
        
        address public current_winner;
        //uint public votes_of_current_winner;                                    //expand this to a list of current winners
        
        // Set to true at the end, disallows any change
        bool ended;
        
        // Events that will be fired on changes.
        event latestVote(address voter, address candidate);
        event votingEnded(address winner);

        /// Text to display during transaction message
        function SimpleAuction(address[] _candidates) {                           //should be of type list
        
                for (uint i=0; i<_candidates.length; i += 1) {
                        candidates.push(_candidates[i]);
                }
                log0("hey");
                //input
                //["0xdedb49385ad5b94a16f236a6890cf9e0b1e30392","0xdedb49385ad5b94a16f236a6890cf9e0b1e30393"]
                
        }
        
        function AddCandidate(address _candidate) {
                candidates.push(_candidate);
                num_votes[_candidate] = 0;
        }

        function vote(address _candidate) {
                if (!includes(candidates, _candidate) ) {
                        log0('Candidate does not exist');
                        return;    
                }
                if (voted[msg.sender]) {
                        log0('Voter changed vote');
                        change_vote(_candidate);
                        return;
                }
                log0(bytes32(num_votes[_candidate]));
                voters[msg.sender] = _candidate;                                //should be recording who voted for whom
                num_votes[_candidate] += 1;                                 //is that all?
                voted[msg.sender] = true;
                log0(bytes32(num_votes[_candidate]));
        }
        
        function change_vote(address _candidate) {
                if (!voted[msg.sender]) {
                        log0('Voter didnt vote yet');
                       vote(_candidate); 
                       return;
                }
                log0(bytes32(num_votes[voters[msg.sender]]));
                log0(bytes32(num_votes[_candidate]));
                num_votes[voters[msg.sender]] -= 1;
                log0(bytes32(num_votes[voters[msg.sender]]));
                num_votes[_candidate] += 1;
                voters[msg.sender] = _candidate;
                log0(bytes32(num_votes[_candidate]));
        }
        
        function get_winner() {
                current_winner = candidates[0];             //Initial values
                for(uint i = 1; i<candidates.length; i+=1) {
                        if (num_votes[current_winner] <= num_votes[candidates[i]]) {
                                current_winner = candidates[i];
                                //votes_of_current_winner = num_votes[cur_winner];
                        }
                }
        }
        
        /// End the auction and send the highest bid
        /// to the beneficiary.
        function votingEnds() {
                get_winner();
                votingEnded(current_winner);
                bool success = true;
                ended = true;
        }
        
        function includes(address[] arr_canditates, address candidate) returns(bool contained) {
                for(uint i=0; i<arr_canditates.length; i += 1) {
                        if (arr_canditates[i] == candidate) {
                                return true;
                        }
                }
                return false;
        }
        
        function() {
                // This function gets executed if a
                // transaction with invalid data is sent to
                // the contract or just ether without data.
                // We revert the send so that no-one
                // accidentally loses money when using the
                // contract.
                throw;
        }
}