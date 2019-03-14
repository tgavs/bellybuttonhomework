from .app import db

class Belly(db.Model):

    __tablename__='bellybutton'

    sample=db.Column(db.Integer,primary_key=True)
    EVENT=db.Column(db.String(64))
    ETHNICITY=db.Column(db.String(64))
    GENDER=db.Column(db.String(64))
    AGE=db.Column(db.Float)
    WFREQ=db.Column(db.Float)
    BBTYPE=db.Column(db.String(64))
    LOCATION=db.Column(db.String(64))
    COUNTRY012=db.Column(db.String(64))
    ZIP012=db.Column(db.String(64))
    COUNTRY1319=db.Column(db.String(64))
    ZIP1319=db.Column(db.String(64))
    DOG=db.Column(db.String(64))
    CAT=db.Column(db.String(64))
    IMPSURFACE013=db.Column(db.Float)
    NPP013=db.Column(db.Float)
    MMAXTEMP013=db.Column(db.Float)
    PFC013=db.Column(db.String(64))
    IMPSUFRFACE1319=db.Column(db.String(64))
    NPP1319=db.Column(db.Float)
    MMAXTEMP1319=db.Column(db.Float)
    PFC1319=db.Column(db.String(64))

    __tablename__='belly_button_biodiversity'

    out_id=db.Column(db.Integer,primary_key=True)
    lowest_taxonomic_unit_found=db.Column(db.String(64))
    



