import json
import csv

with open(r"C:\Users\HII\Downloads\csab-nit-round1-2024.json", 'r', encoding='utf-8') as f:
    data = json.load(f)

with open(r"C:\Users\HII\Downloads\csab-nit-round1-2024.csv", 'w', newline='', encoding='utf-8') as f2:
    writer = csv.writer(f2)

    for row in data:
        if row:
            if row[3] == "HS" or row[5] == "Female-only (including Supernumerary)" or row[4] != "OBC-NCL":
                pass
            else:
                writer.writerow(row)
