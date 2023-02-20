from openpyxl import load_workbook
import json
import re

json_file = '../kanji.json'
def main():
    excel = load_workbook(filename="../kanji.xlsx")
    sheet = excel["Sheet1"]
    data = sheet["A2:D4436"]
    
    kanjis = []
    kanji_info = {
        'kanji': [],
        'accent': [],
        'example': [],
        'reference': []
    }
    last_kanji = ""

    for line in data:
        
        kanji = line[0].value
        accent = line[1].value
        example = line[2].value
        reference = line[3].value
        if kanji is None:
            kanji_info['accent'].append(accent)
            kanji_info['example'].append(example.split("，")) if example is not None else kanji_info['example'].append([]) 

            if reference is not None:
                kanji_info['reference'].append(reference)
        else:
            if kanji != last_kanji:
                if last_kanji != '':
                    kanjis.append(kanji_info)
                kanji_info = {
                    'kanji': [],
                    'accent': [],
                    'example': [],
                    'reference': [] 
                }
                kanji_info['kanji'].append(re.split('\(|（|\[', kanji)[0])

            last_kanji = kanji

            groups = re.findall(r'（(.+?)）|\[(.+?)\]|\((.+?)\)', kanji)
            for group in groups:
                for alternative in group:
                    if len(alternative) > 0:
                        kanji_info['kanji'].append(alternative)
            
            kanji_info['accent'].append(accent)
            
            kanji_info['example'].append(example.split("，")) if example is not None else kanji_info['example'].append([]) 

            if reference is not None:
                kanji_info['reference'].append(reference)
    s = json.dumps(kanjis, sort_keys=True, indent=4, ensure_ascii=False)
    f = open(json_file, 'w', encoding='utf8')
    f.write(s)
    f.close()
                
main()