class Mark{

    static importanceLevel = {
        NORMAL: 0,
        MEDIUM: 1,
        HIGH: 2
    }

    constructor(time, title, description, importance = this.importance.NORMAL){
        this.time = time;
        this.title = title;
        this.description = description;
        this.importance = importance;
    }

    update(time, title, description, importance){
        this.time = time;
        this.title = title;
        this.description = description;
        this.importance = importance;
    }
}

export default Mark;