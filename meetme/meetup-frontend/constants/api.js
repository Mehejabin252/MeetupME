import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.0.104:3000/api/';

const fakeGroupId = '60f3d57c3119ba015c02c1e5';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
        
    this.path = `/groups/${this.groupId}/meetups`;
  }
  async fetchGroupMeetups() {    
    const { data } = await axios.get(this.path);
    console.log(typeof (data.meetups));
    return data.meetups;
  }
}

export {
  MeetupApi,
};
