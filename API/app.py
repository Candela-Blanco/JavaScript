from flask import Flask, jsonify, request
import json
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def read_json_file():
    with open("user.json", "r") as file:
        return json.load(file)


def write_json_file(data):
    with open("user.json", "w") as file:
        json.dump(data, file, indent=4)


@app.route("/api/users", methods=["GET"])
def get_users():
    data = read_json_file()
    return jsonify(data["users"])


@app.route("/api/users", methods=["POST"])
def add_user():
    new_user = request.get_json()
    data = read_json_file()
    max_id = max([user["id"] for user in data["users"]], default=0)
    new_user["id"] = max_id + 1

    data["users"].append(new_user)
    write_json_file(data)
    return jsonify(new_user), 201


if __name__ == "__main__":
    app.run()
