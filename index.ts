class BinaryTree {
    private root: TreeNode;
    constructor(root = null) {
        this.root = root;
    }

    public insert(data: number) {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNewNode(this.root, newNode);
        }
    }

    private insertNewNode(node: TreeNode, newNode: TreeNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNewNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNewNode(node.right, newNode);
            }
        }
    }

    public order(order, callback) {
        order(this.root, callback);
    }

    public getMin(current = this.root) {
        while (!(current.left == null)) {
            current = current.left;
        }
        return current;
    }

    public getMax(current = this.root) {
        while (!(current.right == null)) {
            current = current.right;
        }
        return current;
    }

    // 查找
    public find(data) {
        var current = this.root;
        while (current != null) {
            if (current.data == data) {
                return current;
            }
            else if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return null;
    }

    public remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    private removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            if (node.left == null && node.right == null) {
                return null;
            }
            if (node.left == null) {
                return node.right;
            }
            if (node.right == null) {
                return node.right;
            }
            var tempNode = this.getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

}

class TreeNode {
    constructor(data: number, left: TreeNode = null, right: TreeNode = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    public data: number;
    public left: TreeNode;
    public right: TreeNode;
}

const inOrder = function (node, callback) {
    if (node !== null) {
        inOrder(node.left, callback);
        callback(node.data);
        inOrder(node.right, callback);
    }
};

const preOrder = function (node, callback) {
    if (node !== null) {
        callback(node.data);
        preOrder(node.left, callback);
        preOrder(node.right, callback);
    }
};

const postOrder = function (node, callback) {
    if (node !== null) {
        postOrder(node.left, callback);
        postOrder(node.right, callback);
        callback(node.data);
    }
};

const strategy = {
    /** 中序遍历 */
    inOrder: inOrder,
    /** 先序遍历 */
    preOrder: preOrder,
    /** 后序遍历 */
    postOrder: postOrder,
}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const tree = new BinaryTree();
nodes.forEach(v => tree.insert(v));
const log = console.log.bind(console);
tree.order(strategy.inOrder, log)
log('max', tree.getMax());
log('min', (tree.getMin()));