import sys
from unittest import result
import json
import scipy

request = (json.loads(sys.argv[1]))

result = [{
    'Hello': "Say ,'hi': tan'",
    'Tan': [
        {
            'name': "Lê, văn 'Tám'",
            'age': 12,
        },
        {
            'name': "La, Tran 'Tham'",
            'age': 22,
        }
    ]
}]

print(json.dumps(request))
sys.stdout.flush()