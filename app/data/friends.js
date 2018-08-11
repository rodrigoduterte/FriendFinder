var friendly = {
    person : {"name":"","photo":"","scores":[]},
    yourfriend : {},
    friends : [],
    diffScores : [],
    reducer : (total,currentValue) => {return total+currentValue;},
    addPerson : (person) => {
        friendly.person = person;
        return friendly.diffFunc();
    },
    diffFunc : function () {
         // push the difference between person and friend to diffScores
         friendly.friends.forEach((friend)=>{
            friendly.diffScores.push(friendly.person.scores.map((score,idx)=>{return Math.abs(parseInt(friend.scores[idx]) - parseInt(score))}).reduce(friendly.reducer,0));
        });
        return friendly.selectFriend();
    },
    selectFriend : function () {
        // select a friend with the least diffScore
        friendly.yourfriend = friendly.friends[  friendly.diffScores.findIndex((f)=>{return f === Math.min(...friendly.diffScores);})  ];
        return this;
    }
}
friendly.friends = [{"name":"Ahmed","photo":"https://upload.wikimedia.org/wikipedia/commons/a/a9/Ahmed_Sultan_Bin_Sulayem.jpg","scores":["5","1","4","4","5","1","2","5","4","1"]},
{"name":"Jacob Deming","photo":"https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg","scores":["4","2","5","1","3","2","2","1","3","2"]},
{"name":"Jeremiah Scanlon","photo":"https://avatars2.githubusercontent.com/u/8504998?v=3&s=460","scores":["5","2","2","2","4","1","3","2","5","5"]},
{"name":"Louis T. Delia","photo":"https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg","scores":["3","3","4","2","2","1","3","2","2","3"]},
{"name":"Lou Ritter","photo":"https://www.aemsa.org/wp-content/uploads/2015/08/LouRitterHeadshot1.jpg","scores":["4","3","4","1","5","2","5","3","1","4"]},
{"name":"Jordan Biason","photo":"https://pbs.twimg.com/profile_images/863381295308603392/1GnjX--f_400x400.jpg","scores":["4","4","2","3","2","2","3","2","4","5"]}];

module.exports = friendly;