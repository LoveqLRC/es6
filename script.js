'use strict';

function meeting(when, where, {person, activity} = {}) {
    console.log(when, where, person, activity);
}

//输出：12点 广州 rc movie
meeting('12点', '广州', {person: 'rc', activity: 'movie'});


