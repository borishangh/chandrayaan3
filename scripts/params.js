
const params = {
    "ch3_earth_small": {
        "x_lim": [-50000, 250000],
        "y_lim": [-150000, 150000],
        "x_param": 'x',
        "y_param": 'y',
        "path_data": [["../csv/ch3_geo.csv", "lightpink"]],
        "path_length": 17040,
        "primary_object": [6371, "royalblue"]
    },
    "ch3_moon": {
        "x_lim": [-5000, 20000],
        "y_lim": [-6500, 18500],
        "x_param": 'y',
        "y_param": 'z',
        "path_data": [["../csv/ch3_moon.csv", "lightpink"]],
        "path_length": 17040,
        "primary_object": [1737.4, "#999"]
    },
    "ch3_earth": {
        "x_lim": [-450000, 450000],
        "y_lim": [-450000, 450000],
        "x_param": 'x',
        "y_param": 'y',
        "path_data": [["../csv/ch3_geo.csv", "lightpink"],
        ["../csv/moon_geo.csv", "#999"]],
        "path_length": 17040,
        "primary_object": [6371, "royalblue"]
    }
}

export { params }