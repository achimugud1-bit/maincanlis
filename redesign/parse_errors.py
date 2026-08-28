import json

with open('vnu_errors.json') as f:
    data = json.load(f)

messages = {}
for msg in data['messages']:
    if msg['type'] == 'error':
        err = msg['message']
        messages[err] = messages.get(err, 0) + 1
        
for err, count in sorted(messages.items(), key=lambda x: x[1], reverse=True):
    print(f"{count}: {err}")
