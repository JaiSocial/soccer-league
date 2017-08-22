#!/usr/bin/env python
import pymongo

mongodb_url = '127.0.0.1'
mongodb_port = '3001'
mongodb_connection_url = 'mongodb://' + mongodb_url + ':' + mongodb_port + '/meteor'


match_ctr = 0

current_location_idx = 0

## Hard-coding location identifiers.
## At some point, this program should read available location
## identifier values from the target MongoDB location collection
location_ids = [1,2,3]


team_ids = [1,2,3,4,5,6]

current_time_idx = 0

game_times = ['9AM', '11AM', '1PM']

current_date_idx = 0

game_dates = [
    'Aug 26, 2017',
    'Aug 26, 2017',
    'Aug 26, 2017',
    'Sep 2, 2017',
    'Sep 9, 2017',
    'Sep 16, 2017',
    'Sep 23 2017',
    'Sep 30, 2017',
    'Oct 7, 2017',
    'Oct 14, 2017',
    'Oct 21, 2017',
    'Oct 28, 2017',
    'Nov 4, 2017',
    'Nov 11, 2017',
    'Nov 18, 2017',
    'Nov 25, 2017',
    ]

max_games_per_date = len(location_ids) * len(game_times)

game_list = []

def summarize():

    summarize_location_ids()

    summarize_team_ids()

    summarize_game_dates()

    summarize_game_times()

    print("The maximum number of games that can be played on a give date is %d" % max_games_per_date)



def summarize_location_ids():

    count = len(location_ids)

    print("Here are the %d location identifiers where games for this league will be played:" % count)

    ctr = 0

    for id in location_ids:

        ctr += 1

        print("%d. %s"%(ctr, id))


def summarize_team_ids():

    count = len(team_ids)

    print("Here are the %d team identifiers for this league:" % count)

    ctr = 0

    for id in team_ids:

        ctr += 1

        print("%d. %s"%(ctr, id))



def summarize_game_dates():

    count = len(game_dates)

    print("Here are the %d dates games will be played for this season:" % count)

    ctr = 0

    for date in game_dates:

        ctr += 1

        print("%d. %s"%(ctr, date))


def summarize_game_times():

    count = len(game_times)

    print("Here are the %d times games will be played for this season:" % count)

    ctr = 0

    for time in game_times:

        ctr += 1

        print("%d. %s"%(ctr, time))


def get_game_time():

    global current_time_idx

    if current_time_idx == len(game_times):
        current_time_idx = 0

    game_time = game_times[current_time_idx]

    current_time_idx += 1

    return game_time


def get_game_date():

    global current_date_idx


    if current_date_idx == len(game_dates):
        current_date_idx = 0

    game_date = game_dates[current_date_idx]

    current_date_idx += 1

    return game_date


def get_location_id():

    global current_location_idx


    if current_location_idx == len(location_ids):
        current_location_idx = 0

    location_id = location_ids[current_location_idx]

    current_location_idx += 1

    return location_id


def generate_game_documents(team_id_list, round_number=1):
    ''' 
        This function will generate valid game records/documents
        to be inserted into the games collection.
    '''

    

    i = 0
    
    global match_ctr

    print("Here are the matches for round %d" % round_number)

    global game_list

    location_id = get_location_id()

    for date in game_dates:

        while i < len(team_id_list):

            j = i + 1

            while j < len(team_id_list):

                match_ctr += 1

                game_time = get_game_time()
                game_date = get_game_date()

                if match_ctr % len(game_times) == 0:
                    ## We've scheduled max number of games
                    ## that can be played at this location so
                    ## it is time to get a new location.
                    location_id = get_location_id()



                game_time_and_date = game_time + ' ' + game_date

                game = {
                    "game_id" : match_ctr,
                    "date" : game_time_and_date,
                    "location_id" : location_id,
                    "home_team_id" : team_id_list[i],
                    "away_team_id" : team_id_list[j],
                    "home_team_score" : 0,
                    "away_team_score" : 0
                };

                game_list.append(game)

                print(game)
                # "%d. %s vs %s"%(match_ctr, team_1, team_2))

                j += 1

            i += 1


def insert_game_documents(game_list):
    '''
        This function will insert the game records/documents
        into the games collection.
    '''


    # establish a connection to the database
    try:
        connection = pymongo.MongoClient(mongodb_connection_url)
    except Exception as e:
        print("Unexpected error:", type(e), e)


    # get a handle to the meteor database
    db = connection.meteor
    
    games_collection = db.games

    print("Will insert game documents into the games collection")
    
    game_record_ctr = 0

    for game in game_list:

        game_record_ctr += 1

        try:
            games_collection.insert_one(game)

        except Exception as e:
            print("Unexpected error:", type(e), e)


if __name__ == '__main__':

    summarize()

    generate_game_documents(team_ids, 1)

    reversed_list = []

    for team in reversed(team_ids):
        reversed_list.append(team)

    
    generate_game_documents(reversed_list,2)

    insert_game_documents(game_list)