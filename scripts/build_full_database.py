# -*- coding: utf-8 -*-
import json
import random
from def_ciencias import CIENCIAS_DATA
from def_formas import FORMAS_DATA
from def_objetos import OBJETOS_DATA
from def_geografia_comida import GEOGRAFIA_COMIDA_DATA

themes = [
    {
        "id": "ciencias",
        "label": "Ciência e Natureza",
        "en": "Science & Nature",
        "short": "sci",
        "data": CIENCIAS_DATA
    },
    {
        "id": "formas",
        "label": "Objetos Geométricos",
        "en": "Geometric Objects & Shapes",
        "short": "geo",
        "data": FORMAS_DATA
    },
    {
        "id": "objetos",
        "label": "Objetos Escola & Cotidiano",
        "en": "School & Daily Objects",
        "short": "sch",
        "data": OBJETOS_DATA
    },
    {
        "id": "geografia_comida",
        "label": "Geografia e Comida",
        "en": "Geography & Food",
        "short": "gf",
        "data": GEOGRAFIA_COMIDA_DATA
    }
]

diff_map = {
    "facil": "f",
    "medio": "m",
    "dificil": "d"
}

all_vocab_items = []

for t in themes:
    t_id = t["id"]
    t_short = t["short"]
    for diff in ["facil", "medio", "dificil"]:
        items = t["data"][diff]
        d_short = diff_map[diff]
        for idx, item in enumerate(items):
            word_en, word_pt, phonetic, sentence, sentence_pt, rationale_text = item
            
            # Format wordEn with initial capital for title/flashcard elegance
            word_en_cap = word_en[0].upper() + word_en[1:]
            
            # Generate 3 distinct distractors from the same theme & difficulty pool
            other_items = [x for i, x in enumerate(items) if i != idx]
            # Use deterministic seed based on index to have stable options on rebuild
            rng = random.Random(f"{t_id}_{diff}_{idx}")
            chosen_distractors = rng.sample(other_items, 3)
            
            # Create 4 options
            correct_opt = {
                "text": word_en_cap,
                "isCorrect": True,
                "rationale": f"'{word_en_cap}' é a tradução correta para '{word_pt}'."
            }
            distractor_opts = [
                {
                    "text": d[0].upper() + d[0][1:],
                    "isCorrect": False,
                    "rationale": f"'{d[0].upper() + d[0][1:]}' significa '{d[1]}', não '{word_pt}'."
                }
                for d in chosen_distractors
            ]
            
            # Deterministic slot for correct option (e.g. (idx % 4))
            pos = idx % 4
            options_list = list(distractor_opts)
            options_list.insert(pos, correct_opt)
            
            letters = ["A", "B", "C", "D"]
            final_options = []
            for l_idx, opt in enumerate(options_list):
                final_options.append({
                    "id": letters[l_idx],
                    "text": opt["text"],
                    "isCorrect": opt["isCorrect"],
                    "rationale": opt["rationale"]
                })
            
            vocab_obj = {
                "id": f"sql-{t_short}-{d_short}-{idx+1:02d}",
                "topic": t_id,
                "difficulty": diff,
                "wordEn": word_en_cap,
                "wordPt": word_pt,
                "phonetic": phonetic,
                "sentence": sentence,
                "sentencePt": sentence_pt,
                "exampleEn": sentence.replace("_________", word_en_cap),
                "examplePt": sentence_pt,
                "gapWord": word_en_cap,
                "question": f"Como se diz '{word_pt}' em inglês?",
                "hint": rationale_text,
                "rationale": f"'{word_en_cap}' ({phonetic}): {rationale_text}",
                "options": final_options
            }
            all_vocab_items.append(vocab_obj)

print("Total generated vocab items:", len(all_vocab_items))
counts_by_topic = {}
for v in all_vocab_items:
    k = f"{v['topic']}_{v['difficulty']}"
    counts_by_topic[k] = counts_by_topic.get(k, 0) + 1
print("Counts by topic & difficulty:", counts_by_topic)
