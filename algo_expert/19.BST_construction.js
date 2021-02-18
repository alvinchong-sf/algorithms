class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if(!this.value) {
        this.value = new BST(value)
    } else if (value < this.value) {
        if(!this.left) {
            this.left = new BST(value)
        } else {
            this.left.insert(value)
        }
    } else if (value >= this.value) {
        if(!this.right) {
            this.right = new BST(value)
        } else {
            this.right.insert(value)
        }
    }
    return this;
  }

  contains(value) {
    if(value === this.value) {
        return true;
    } else if (value < this.value) {
        if(!this.left) {
            return false;
        } else {
            return this.left.contains(value)
        }
    } else {
        if(!this.right) {
            return false
        } else {
            return this.right.contains(value)
        }
    }
  }

  remove(value, parent = null) {
		// if value is less than root, go left side
   	if(value < this.value) {
        // if there is a node on left side than we call it recursively
        if(this.left) {
            this.left.remove(value, this);
        }
        // if value is greater than root, go right side
    } else if (value > this.value) {
        // if there is node on right side than we call it recursively
        if(this.right) {
            this.right.remove(value, this)
        }
    // this else means we found the value we are searching for
    } else {
        // in the case when there are both left and right child nodes.
        if(this.left && this.right) {
            // we then set its value to the smallest value from right side
            this.value = this.right.getMinValue();
            this.right.remove(this.value, this);
        } else if (parent === null) {
            if(this.left) {
                this.value = this.left.value;
                this.right = this.left.right;
                this.left = this.left.left;
            } else if (this.right) {
                this.value = this.right.value;
                this.left = this.right.left;
                this.right = this.right.right;
            } else {
                // this is a single-node tree; do nothing
            }
        } else if (parent.left === this) {
            parent.left = this.left ? this.left : this.right;
        } else if (parent.right === this) {
            parent.right = this.left ? this.left : this.right;
        }
    }
    return this;
  }
	
	// helper functiion that will find the smallest value on left side
	getMinValue() {
		if(this.left) {
			return this.left.getMinValue();
		} else {
			return this.value
		}
	}
}
