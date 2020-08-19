var JANDATA=[
    {
        "type": "Door",
        "overallHeight": 0.0,
        "overallWidth": 0.0,
        "name": "A common door",
        "description": "Description of a standard door",
        "globalId": "c9ca84bc-1a17-488b-a03d-b86ac4d29b48",
        "volume": 9611.239401663132,
        "representations": [
            {
                "type": "ShapeRepresentation",
                "ref": "fe0b980f-7ca9-4e50-b000-0de06d6fdb26"
            }
        ]
    },
    {
        "type": "Wall",
        "name": "Wall xyz",
        "description": "Description of Wall",
        "globalId": "c9c983e3-d6db-4dcb-b071-b03a866dd60c",
        "volume": 181698.20138837994,
        "representations": [
            {
                "type": "ShapeRepresentation",
                "ref": "f40a5410-0dd5-4f43-9190-59c1d951682a"
            }
        ]
    },
    {
        "type": "BuildingStorey",
        "elevation": 0.0,
        "compositionType": "complex",
        "name": "Default Building Storey",
        "description": "Description of Default Building Storey",
        "globalId": "c9c88439-96bb-49bf-90b1-45dc453accc4",
        "isDecomposedBy": [
            {
                "type": "Door",
                "globalId": "c9ca84bc-1a17-488b-a03d-b86ac4d29b48"
            },
            {
                "type": "Wall",
                "globalId": "c9c983e3-d6db-4dcb-b071-b03a866dd60c"
            }
        ]
    },
    {
        "type": "Building",
        "elevationOfRefHeight": 0.0,
        "elevationOfTerrain": 0.0,
        "compositionType": "complex",
        "name": "Vertigo Building",
        "description": "TU/e Department of the Built Environment",
        "globalId": "c98c588b-a8d5-45fa-80b6-8558f74be676",
        "isDecomposedBy": [
            {
                "type": "BuildingStorey",
                "globalId": "c9c88439-96bb-49bf-90b1-45dc453accc4"
            }
        ]
    },
    {
        "type": "Site",
        "refElevation": 0.0,
        "compositionType": "complex",
        "name": "TU/e campus",
        "description": "The High Tech campus of the Eindhoven University of Technology",
        "globalId": "cd288abb-1b91-4141-b07c-360d1a33d7b9",
        "isDecomposedBy": [
            {
                "type": "Building",
                "globalId": "c98c588b-a8d5-45fa-80b6-8558f74be676"
            }
        ]
    },
    {
        "type": "Project",
        "name": "Default Project",
        "description": "Description of Default Project",
        "globalId": "f639cd54-7231-4070-ad4f-aed7120c3bfc",
        "isDecomposedBy": [
            {
                "type": "Site",
                "globalId": "cd288abb-1b91-4141-b07c-360d1a33d7b9"
            }
        ]
    },
    {
        "type": "ShapeRepresentation",
        "globalId": "fe0b980f-7ca9-4e50-b000-0de06d6fdb26",
        "representationIdentifier": "Body",
        "representationType": "OBJ",
        "items": [
            "v 19.68503937007874 7.874015777364492 1.8773116482173788e-06\nv 19.68503937007874 3.9370078446827543 82.67716347701906\nv 19.68503937007874 7.874015777364492 82.67716347701906\nv 19.68503937007874 7.874015777364492 1.8773116482173788e-06\nv 19.68503937007874 3.9370078446827543 1.8773116482173788e-06\nv 19.68503937007874 3.9370078446827543 82.67716347701906\nv 49.21259842519685 7.874015777364492 82.67716347701906\nv 49.21259842519685 7.874015777364492 1.8773116482173788e-06\nv 19.68503937007874 7.874015777364492 82.67716347701906\nv 19.68503937007874 7.874015777364492 82.67716347701906\nv 49.21259842519685 7.874015777364492 1.8773116482173788e-06\nv 19.68503937007874 7.874015777364492 1.8773116482173788e-06\nv 49.21259842519685 7.874015777364492 82.67716347701906\nv 49.21259842519685 3.9370078446827543 82.67716347701906\nv 49.21259842519685 3.9370078446827543 1.8773116482173788e-06\nv 49.21259842519685 7.874015777364492 82.67716347701906\nv 49.21259842519685 3.9370078446827543 1.8773116482173788e-06\nv 49.21259842519685 7.874015777364492 1.8773116482173788e-06\nv 19.68503937007874 3.9370078446827543 82.67716347701906\nv 19.68503937007874 3.9370078446827543 1.8773116482173788e-06\nv 49.21259842519685 3.9370078446827543 82.67716347701906\nv 49.21259842519685 3.9370078446827543 82.67716347701906\nv 19.68503937007874 3.9370078446827543 1.8773116482173788e-06\nv 49.21259842519685 3.9370078446827543 1.8773116482173788e-06\nv 49.21259842519685 3.9370078446827543 1.8773116482173788e-06\nv 19.68503937007874 7.874015777364492 1.8773116482173788e-06\nv 49.21259842519685 7.874015777364492 1.8773116482173788e-06\nv 49.21259842519685 3.9370078446827543 1.8773116482173788e-06\nv 19.68503937007874 3.9370078446827543 1.8773116482173788e-06\nv 19.68503937007874 7.874015777364492 1.8773116482173788e-06\nv 49.21259842519685 7.874015777364492 82.67716347701906\nv 19.68503937007874 3.9370078446827543 82.67716347701906\nv 49.21259842519685 3.9370078446827543 82.67716347701906\nv 49.21259842519685 7.874015777364492 82.67716347701906\nv 19.68503937007874 7.874015777364492 82.67716347701906\nv 19.68503937007874 3.9370078446827543 82.67716347701906\nf 1 2 3\nf 4 5 6\nf 7 8 9\nf 10 11 12\nf 13 14 15\nf 16 17 18\nf 19 20 21\nf 22 23 24\nf 25 26 27\nf 28 29 30\nf 31 32 33\nf 34 35 36"
        ]
    },
    {
        "type": "ShapeRepresentation",
        "globalId": "f40a5410-0dd5-4f43-9190-59c1d951682a",
        "representationIdentifier": "Body",
        "representationType": "OBJ",
        "items": [
            "v 0.0 11.8110238567112 9.386558197377326e-07\nv 0.0 -2.3466395602717236e-07 90.55118016370638\nv 0.0 11.8110238567112 90.55118016370638\nv 0.0 11.8110238567112 9.386558197377326e-07\nv 0.0 -2.3466395602717236e-07 9.386558197377326e-07\nv 0.0 -2.3466395602717236e-07 90.55118016370638\nv 196.8503937007874 -2.3466395602717236e-07 90.55118016370638\nv 49.21259842519685 -2.3466395602717236e-07 9.386558197377326e-07\nv 196.8503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 196.8503937007874 -2.3466395602717236e-07 90.55118016370638\nv 49.21259842519685 -2.3466395602717236e-07 82.6771648850028\nv 49.21259842519685 -2.3466395602717236e-07 9.386558197377326e-07\nv 196.8503937007874 -2.3466395602717236e-07 90.55118016370638\nv 19.68503937007874 -2.3466395602717236e-07 82.6771648850028\nv 49.21259842519685 -2.3466395602717236e-07 82.6771648850028\nv 19.68503937007874 -2.3466395602717236e-07 82.6771648850028\nv 0.0 -2.3466395602717236e-07 9.386558197377326e-07\nv 19.68503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 0.0 -2.3466395602717236e-07 90.55118016370638\nv 0.0 -2.3466395602717236e-07 9.386558197377326e-07\nv 19.68503937007874 -2.3466395602717236e-07 82.6771648850028\nv 0.0 -2.3466395602717236e-07 90.55118016370638\nv 19.68503937007874 -2.3466395602717236e-07 82.6771648850028\nv 196.8503937007874 -2.3466395602717236e-07 90.55118016370638\nv 0.0 11.8110238567112 90.55118016370638\nv 19.68503937007874 11.8110238567112 9.386558197377326e-07\nv 0.0 11.8110238567112 9.386558197377326e-07\nv 0.0 11.8110238567112 90.55118016370638\nv 19.68503937007874 11.8110238567112 82.6771648850028\nv 19.68503937007874 11.8110238567112 9.386558197377326e-07\nv 0.0 11.8110238567112 90.55118016370638\nv 49.21259842519685 11.8110238567112 82.6771648850028\nv 19.68503937007874 11.8110238567112 82.6771648850028\nv 49.21259842519685 11.8110238567112 82.6771648850028\nv 196.8503937007874 11.8110238567112 9.386558197377326e-07\nv 49.21259842519685 11.8110238567112 9.386558197377326e-07\nv 196.8503937007874 11.8110238567112 90.55118016370638\nv 196.8503937007874 11.8110238567112 9.386558197377326e-07\nv 49.21259842519685 11.8110238567112 82.6771648850028\nv 196.8503937007874 11.8110238567112 90.55118016370638\nv 49.21259842519685 11.8110238567112 82.6771648850028\nv 0.0 11.8110238567112 90.55118016370638\nv 19.68503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 0.0 11.8110238567112 9.386558197377326e-07\nv 19.68503937007874 11.8110238567112 9.386558197377326e-07\nv 19.68503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 0.0 -2.3466395602717236e-07 9.386558197377326e-07\nv 0.0 11.8110238567112 9.386558197377326e-07\nv 196.8503937007874 11.8110238567112 90.55118016370638\nv 0.0 -2.3466395602717236e-07 90.55118016370638\nv 196.8503937007874 -2.3466395602717236e-07 90.55118016370638\nv 196.8503937007874 11.8110238567112 90.55118016370638\nv 0.0 11.8110238567112 90.55118016370638\nv 0.0 -2.3466395602717236e-07 90.55118016370638\nv 196.8503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 49.21259842519685 11.8110238567112 9.386558197377326e-07\nv 196.8503937007874 11.8110238567112 9.386558197377326e-07\nv 196.8503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 49.21259842519685 -2.3466395602717236e-07 9.386558197377326e-07\nv 49.21259842519685 11.8110238567112 9.386558197377326e-07\nv 49.21259842519685 11.8110238567112 9.386558197377326e-07\nv 49.21259842519685 -2.3466395602717236e-07 9.386558197377326e-07\nv 49.21259842519685 -2.3466395602717236e-07 82.6771648850028\nv 49.21259842519685 11.8110238567112 9.386558197377326e-07\nv 49.21259842519685 -2.3466395602717236e-07 82.6771648850028\nv 49.21259842519685 11.8110238567112 82.6771648850028\nv 49.21259842519685 -2.3466395602717236e-07 82.6771648850028\nv 19.68503937007874 11.8110238567112 82.6771648850028\nv 49.21259842519685 11.8110238567112 82.6771648850028\nv 49.21259842519685 -2.3466395602717236e-07 82.6771648850028\nv 19.68503937007874 -2.3466395602717236e-07 82.6771648850028\nv 19.68503937007874 11.8110238567112 82.6771648850028\nv 19.68503937007874 11.8110238567112 82.6771648850028\nv 19.68503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 19.68503937007874 11.8110238567112 9.386558197377326e-07\nv 19.68503937007874 11.8110238567112 82.6771648850028\nv 19.68503937007874 -2.3466395602717236e-07 82.6771648850028\nv 19.68503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 196.8503937007874 11.8110238567112 90.55118016370638\nv 196.8503937007874 -2.3466395602717236e-07 90.55118016370638\nv 196.8503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 196.8503937007874 11.8110238567112 90.55118016370638\nv 196.8503937007874 -2.3466395602717236e-07 9.386558197377326e-07\nv 196.8503937007874 11.8110238567112 9.386558197377326e-07\nf 1 2 3\nf 4 5 6\nf 7 8 9\nf 10 11 12\nf 13 14 15\nf 16 17 18\nf 19 20 21\nf 22 23 24\nf 25 26 27\nf 28 29 30\nf 31 32 33\nf 34 35 36\nf 37 38 39\nf 40 41 42\nf 43 44 45\nf 46 47 48\nf 49 50 51\nf 52 53 54\nf 55 56 57\nf 58 59 60\nf 61 62 63\nf 64 65 66\nf 67 68 69\nf 70 71 72\nf 73 74 75\nf 76 77 78\nf 79 80 81\nf 82 83 84"
        ]
    }
]