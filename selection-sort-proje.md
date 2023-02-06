# Selection Sort

[22,27,16,2,18,6] -> sıralanacak dizimiz

## Sıralamanın Aşamaları

[22,27,16,2,18,6]  
[2|27,16,22,18,6] -> 1. Adım  
[2,6|16,22,18,27] -> 2. Adım  
[2,6,16|22,18,27] -> 3. Adım  
[2,6,16,18|22,27] -> 4. Adım  
[2,6,16,18,22|27] -> 5. Adım  
[2,6,16,18,22,27] -> 6. Adım(Son)  

## Big-O Gösterimi

- Worst Case: O(n^2)
- Average Case: O(n^2)
- Best Case: O(n)

### Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer?

Average case kapsamına girer  

### [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

[7,3,5,8,2,9,4,15,6]  
[2|3,5,8,7,9,4,15,6] -> 1. Adım  
[2,3|5,8,7,9,4,15,6] -> 2. Adım  
[2,3,4|8,7,9,5,15,6] -> 3. Adım  
[2,3,4,5|7,9,8,15,6] -> 4. Adım  
