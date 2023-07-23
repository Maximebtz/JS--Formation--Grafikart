
// 1

    // // Faire une fonction qui vérifie si les mots de l'objet words sont, ou ou non des palindromes
    // function isPalindrome (word) {
    //     const reversedWord = word
    //         // Transformer la chaine de caractère en tableau 
    //         .split('')
    //         // Permettre d'inverser un tableau
    //         .reverse()
    //         // Premet de rejoindre les mots ensemble 
    //         .join('')
    //     console.log(reversedWord)

    //     return word.toUpperCase() === reversedWord.toUpperCase()
    // }

    // const words = {
    //     kayak: true,
    //     SOS: true,
    //     Kayak: true,
    //     Bonjour: false,
    // }

    // // Lire le tableau words
    // for(let word in words){
    //     if(isPalindrome(word) !== words[word]) {
    //         console.error(`isPalindrome(${word}`)
    //     }
    // }
    

// 2

    // // Faire un tableau d'étiduants
    // const students = [
    //     {
    //         name: 'John',
    //         notes: [1, 20, 18, 12]
    //     },
    //     {
    //         name: 'Jane',
    //         notes: [17, 18, 20, 13]
    //     },
    //     {
    //         name: 'Sophie',
    //         notes: [17, 12, 14, 15]
    //     },
    //     {
    //         name: 'Marc',
    //         notes: [2, 3, 5, 8]
    //     },
    //     {
    //         name: 'Manon',
    //         notes: [18, 17, 18, 19]
    //     }
    // ]
    
    // // Calculer la moyenne
    // const moyenne = (notes) => {
    //     let sum = 0
    //         // Additionner les notes
    //         for(let note of notes){
    //             sum = sum + note
    //         }
    //         // Diviser par le nombre de notes
    //         return sum / notes.length
    // }

    // // Comparer les étudiants
    // const compareStudent = (a, b) => {
    //     return b.moyenne - a.moyenne
    // }

    // // Lire les notes des étudiants
    // for(let student of students) {
    //     // Lire la moyenne
    //     student.moyenne = moyenne(student.notes)
    //     // Lire la quelle note est la moins bonne
    //     student.worst = Math.min(...student.notes)
    //     // Lire la quelle note est la meilleure
    //     student.best = Math.max(...student.notes)
    // }

    // // Retourner un phrase avec le nom et les notes lues au dessus
    // const formatStudent = (student) => {
    //     return `${student.name} avec une moyenne de ${student.moyenne}, meilleure note ${student.best}, pire note ${student.worst}  `
    // }

    // // Trier le tableau compareStudent
    // students.sort(compareStudent)


    // console.log(`Top 3 étudiant :
    // 1: ${formatStudent(students[0])} 
    // 2: ${formatStudent(students[1])} 
    // 3: ${formatStudent(students[2])}`
    // )


// 3