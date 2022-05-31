const findTheOldest = function(people) {
    let oldest;
    let oldestAge = 0;

    for (let i = 0; i < people.length; i++) {
        let age;
        if (people[i].yearOfDeath == undefined)
            age = 2022 - people[i].yearOfBirth;
        else 
            age = people[i].yearOfDeath - people[i].yearOfBirth;

        if (age > oldestAge) {
            oldest = people[i];
            oldestAge = age;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
