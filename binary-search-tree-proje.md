# Binary Search Tree

### [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary Search Tree aşamalarını yazınız.

Dizinin ilk elemanı root seçilerek ağaç oluşturmaya başlanır. Bu roota göre küçük olanlar sola, büyük olanlar sağa yerleşir. Her bir dal için ayrı ayrı kontrol edilir.

```
                  root
                    7
                /       \
               5         8
             /   \         \
            1     6         9
           / \
          0   3
             / \
            2   4

```
