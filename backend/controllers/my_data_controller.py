from flask import Blueprint, jsonify
from ..models.mydata import MyData

data_bp = Blueprint('my_data', __name__, url_prefix='/api/mydata')

@data_bp.route('/' , methods=['GET'])
def get_my_data():
    my_data = [
        MyData(1 , "hello Data World 1").to_dict(),
        MyData(2 , "hello Data World 2").to_dict(),
        MyData(3 , "hello Data World 3").to_dict(),
        MyData(4 , "hello Data World 4").to_dict(),
        MyData(5 , "hello Data World 5").to_dict()
    ]
    return jsonify(my_data) , 200

        