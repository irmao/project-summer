"use strict";

var EventModel = function () {
    this.fromJSON = function (json) {
        this.id = json.id,
        this.title = '',
        this.start = new Date(json.event_date),
        this.allDay = true,
        this.color = this.nameToColor(json.name);

        return this;
    }

    this.nameToColor = function (name) {
        var color;
        switch (name) {
            case 'Goal':
                color = 'gold';
                break;
            case 'Done':
                color = 'green';
                break;
            case 'Planned':
                color = 'blue';
                break;
            default:
                break;
        }

        return color;
    }
};
