class Node {
    constructor(initKey, initData, initParent, initLeft, initRight) {
        this.key = initKey;
        this.data = initData;
        this.parent = initParent;
        this.left = initLeft;
        this.right = initRight;
    }
};

export default class BinarySearchTree {
    constructor(initKeyLength) {
        this.root = null;
        this.size = 0;
        this.keyLength = initKeyLength;
    }

    // @todo - YOU MUST UPDATE THIS METHOD SO A KEY ONLY HAS LOWERCASE LETTERS, NO NUMBERS
    generateKey() {
        let key = "";
        for (let i = 0; i < this.keyLength; i++) {
            let randomNum = Math.floor(Math.random() * 26);
            let randomChar;
            randomNum += 97;
            randomChar = String.fromCharCode(randomNum);
            key += randomChar;
        }
        return key;
    }

    putValueRecursively(key, value, testNode) {
        if(key < testNode.key){
            if(testNode.left == null){
                testNode.left = new Node(key, value, testNode, null, null);
                this.size++;
                return;
            }
            else{
                this.putValueRecursively(key, value, testNode.left);
            }
        }
        else if(key == testNode.key){
            testNode.data = value;
            return;
        }
        else{
            if(testNode.right == null){
                testNode.right = new Node(key, value, testNode, null, null);
                this.size++;
                return;
            }
            else{
                this.putValueRecursively(key, value, testNode.right);
            }
        }
    }

    // @todo - YOU MUST DEFINE THIS METHOD
    putValue(key, value) {
        if(this.root == null){
            this.root = new Node(key, value, null, null, null);
            this.size++;
            return;
        }

        this.putValueRecursively(key, value, this.root);
    }


    getValueRecursively(key, testNode){
        if(testNode.key < key){
            if (testNode.left == null) {
                return null;
            }
            else {
                return this.getValueRecursively(key, testNode.left);
            }
        }
        else if(testNode.key == key){
            return testNode.data;
        }
        else{
            if (testNode.right == null) {
                return null;
            }
            else {
                return this.getValueRecursively(key, testNode.right);
            }
        }
    }
    // @todo - YOU MUST DEFINE THIS METHOD
    getValue(key) {
        if(this.root == null){
            return null;
        }
        else{
            return this.getValueRecursively(key, this.root);
        }
    }


    // @todo - YOU MUST DEFINE THIS METHOD
    removeValue(key) {
        var traveller = this.root;
        var found = false;
        while(!found){
            if(traveller.key == key){
                if(traveller.left != null){
                    let largest = traveller.left;
                    while(largest.right != null){
                        largest = largest.right;
                    }
                    traveller.key = largest.key;
                    traveller.data = largest.data;

                    if(largest == largest.parent.left){
                        largest.parent.left = largest.left;
                    }
                    else{
                        largest.parent.right = largest.left;
                    }
                }
                else if(traveller.right != null){
                    let smallest = traveller.right;
                    while(smallest.left != null){
                        smallest = smallest.left;
                    }
                    traveller.key = smallest.key;
                    traveller.data = smallest.data;

                    if(smallest == smallest.parent.right){
                        smallest.parent.right = smallest.right;
                    }
                    else{
                        smallest.parent.left = smallest.right;
                    }
                }
                else{
                    if (traveller == this.root){
                        this.root = null;
                    }
                    else if(traveller == traveller.parent.left){
                        traveller.parent.left = null;
                    }
                    else{
                        traveller.parent.right = null;
                    }
                }
                this.size--;
                found = true;
            }
            else if(key < traveller.key)
            {
                if(traveller.left == null){
                    return;
                }
                else{
                    traveller = traveller.left;
                }
            }
            else{
                if(traveller.right == null){
                    return;
                }
                else{
                    traveller = traveller.right;
                }
            }
        }
    }

    toStringRecursively(traveller, level) {
        let text = "";
        if (traveller.left != null)
            text += this.toStringRecursively(traveller.left, level+1);
        for (let i = 0; i < level; i++) {
            text += "   ";
        }
        text += "   " + traveller.data.toString() + "\n";
        if (traveller.right != null)
            text += this.toStringRecursively(traveller.right, level+1);
        return text;        
    }

    toString() {
        return this.toStringRecursively(this.root, 0);
    }
}