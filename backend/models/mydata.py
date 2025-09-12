class MyData():

    def __init__(self, id , description):
        self._id = id
        self._description = description
    
    def get_id(self):
        return str(self._id)
    
    @property
    def description(self):
        return self._description
    
    @description.setter
    def email(self , value):
        self._description = value

    def to_dict(self):
        return {"id" : self._id , "description" : self._description}





