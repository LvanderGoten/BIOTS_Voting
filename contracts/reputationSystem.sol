contract reputationSystem {
    
    //Variables
    address[] public users;
    mapping(address => int) userReputation;
    
    //relation btw user and blogpost
    mapping(address => mapping(address => bool)) voted;
    mapping(address => address[]) post2votedUsers;
    mapping(address => address) post2owner;
    mapping(address => int) postReputation;
    
    function reputationSystem() {}
    
    function vote(address blogpost, bool upvote) {
        if (!includes(post2votedUsers[blogpost], msg.sender)) {
            if(upvote) {
                userReputation[post2owner[blogpost]] += 1;
                postReputation[blogpost] += 1;
                voted[msg.sender][blogpost] = true;
            } else {
                userReputation[post2owner[blogpost]] -= 1;
                postReputation[blogpost] -= 1;
                voted[msg.sender][blogpost] = false;
            }
            post2votedUsers[blogpost].push(msg.sender);
        } else {
            if(voted[msg.sender][blogpost] == upvote) {
                return;
            } else if (upvote) {
                userReputation[post2owner[blogpost]] += 2;
                postReputation[blogpost] += 2;
                voted[msg.sender][blogpost] = true;
            } else {
                userReputation[post2owner[blogpost]] -= 2;
                postReputation[blogpost] -= 2;
                voted[msg.sender][blogpost] = false;
            }
        }
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