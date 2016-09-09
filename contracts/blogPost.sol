contract blogPost {
    
    string public blogPost;
    string public marriageProofDoc;
    
    // Declare event structure
    event MajorEvent(uint256 logTimeStamp, uint256 eventTimeStamp, bytes32 indexed name, bytes32 indexed description);
    
    function setImage(string IPFSBlogPost) {
        blogPost = IPFSBlogPost;
        majorEventFunc(block.timestamp, "Enter BlogPost", "Post is in IPFS"); //Whatever IPFS is
    }   
}
