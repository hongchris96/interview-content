from collections import defaultdict

def wordle(answer):
    print("Guessing game begins")
    guess = ""
    while guess != answer:
        guess = input("Enter your guess: ")
        if len(guess) != 5:
            print("invalid guess length")
            continue
        guess.upper()
        print(check(guess, answer))
    print("You got it!")

def check(word, target):
    res = ""
    letter_count = defaultdict(int)
    for char in target:
        letter_count[char] += 1
    for i in range(len(word)):
        char = word[i]
        if char == target[i]:
            res += "G"
            letter_count[char] -= 1
        elif letter_count[char] > 0:
            res += "Y"
            letter_count[char] -= 1
        else:
            res += "B"
    return res

f = open("words.txt")
words = f.read().split("\n")
for word in words:
    if len(word) == 5:
        wordle(word)