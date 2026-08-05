import csv


def read_people(filename):
    people = []
    with open(filename, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            first_name = row["name"].split()[0]
            age = int(row["age"])
            people.append((first_name, age))
    return people


def print_people(people):
    for first_name, age in people:
        print(f"{first_name} - {age} години")


def average_age(people):
    ages = [age for _, age in people]
    return sum(ages) / len(ages)


def main():
    people = read_people("data.csv")
    print_people(people)
    print(f"\nСредна възраст: {average_age(people):.2f} години")


if __name__ == "__main__":
    main()
