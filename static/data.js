var DATA=[
    {
        "type": "column",
        "name": "col0",
        "center": {
            "x": 0,
            "y": 0
        },
        "length": 1,
        "width": 1,
        "height": 5,
        "params": ["center", "length", "width", "height"],
        "func": "f0"
    },
    {
        "type": "wall",
        "name": "wall1",
        "start": {
            "x": -2,
            "y": 2
        },
        "end": {
            "x": 2,
            "y": 2
        },
        "height": 3,
        "params": ["start", "end", "height"],
        "func": "f1"
    },
    {
        "type": "slab",
        "name": "slab0",
        "points": [
            {
                "x": -5,
                "y": -5
            },
            {
                "x": 2,
                "y": -2
            },
            {
                "x": 2,
                "y": 2
            },
            {
                "x": -2,
                "y": 2
            }
        ],
        "height": 0.5,
        "params": ["points", "height"],
        "func": "f2"
    }
]
