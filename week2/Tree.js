class Tree {
    constructor() {
        this.root = null;
    }
    hasNode (data) {
        return this.searchRoot(this.root, data);
    }

    searchRoot(root, data){
        if (!root){
            return false;
        }
        if (root.data == data){
            return true;
        }

        if (root.data > data){
            return this.searchRoot(root.left, data);
        }
        if (root.data < data){
            return this.searchRoot(root.right, data);
        }

    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
            return;
        }
        
        let root = this.root;
        while(true) {
            if(node.data < root.data) {
                if(!root.left) {
                    root.left = node;
                    break;
                }
                else {
                    root = root.left;
                }
            }
            if (node.data > root.data) {
                if (!root.right) {
                    root.right = node;
                    break;
                }
                else {
                    root = root.right;
                }
            }
        }
    }
    
}

module.exports = Tree;