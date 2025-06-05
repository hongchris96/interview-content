import math

# I misinterpret the scoring system earlier, I thought each ring had a fixed value
# refactor the ring score check
def totalScore():
    f = open("archery-sample-input.txt")
    lines = f.read().split("\n")
    num_rings = 0
    num_arrows = 0
    score_system = []
    final_score = 0

    def calculateScore(x, y):
        nonlocal final_score
        distance = math.sqrt(x ** 2 + y ** 2)
        for r, s in score_system:
            if distance <= r:
                final_score += s
                break

    for i in range(len(lines)):
        line = lines[i]
        if i == 0:
            r, a = line.split(" ")
            num_rings = int(r)
            num_arrows = int(a)
        elif i < num_rings + 1:
            # populate ring score map
            r, s = line.split(" ")
            score_system.append([int(r), int(s)])
        elif i < num_arrows + num_rings + 1:
            x, y = line.split(" ")
            calculateScore(int(x), int(y))

    return final_score

print(totalScore())