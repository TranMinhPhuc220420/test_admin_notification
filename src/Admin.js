import React from 'react';
import firebase from './Firebase';


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title',
      content: 'Content',
      linkIcon: 'link-icon',
      link: 'link'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    let nameValue = event.target.getAttribute('name');

    switch (nameValue) {
      case 'title':
        this.setState({ title: event.target.value })
        break;
      
      case 'content':
        this.setState({
          content: event.target.value,
        })
        break;
      
      case 'icon':
        this.setState({
          linkIcon: event.target.value,
        })
        break;
      
      case 'link':
        this.setState({
          link: event.target.value,
        })
        break;
      
      default:
        break;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase.database().ref('notification').set({
      title: this.state.title,
      // title: "26 thuyền viên mất tích trong cơn bão số 9",
      body: {
        announced: false,
        body: this.state.content,
        // body: "Lúc 23h, Ban Chỉ đạo tiền phương ứng phó với bão số 9 thông tin việc 2 tàu bị chìm hiện vẫn chưa được tìm thấy. Trên 2 tàu có tổng cộng 26 thuyền viên.",
        icon: this.state.linkIcon
        // icon: "https://znews-photo.zadn.vn/w660/Uploaded/ovhpaob/2020_10_27/122902129_1293985654282396_5753399521511307846_n.jpg" 
      },
      link: this.state.link
      // link: "https://zingnews.vn/26-thuyen-vien-mat-tich-trong-con-bao-so-9-post1146480.html"
    }, function (error) {
      if (error) {
        console.log('error');
      } else {
        // Data saved successfully!
        console.log('successfully');
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="titleNotification">Title</label>
          <input type="text" name="title" className="form-control" id="titleNotification" placeholder="Enter title notification" required onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="bodyContentNotification">Content Notification</label>
          <textarea type="text" name="content" className="form-control" id="bodyContentNotification" placeholder="Enter content notification" required onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="linkIconNotification">Link Icon</label>
          <input type="text" name="icon" className="form-control" id="linkIconNotification" placeholder="Enter link icon notification" required onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="linkNotification">Link Notification</label>
          <input type="text" name="link" className="form-control" id="linkNotification" placeholder="Enter link notification" required onChange={this.handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit Notification</button>
      </form>
    );
  }
}

export default Admin;
