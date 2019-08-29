import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Comment, Tooltip, Menu, Typography, Icon, Form,Descriptions, Input, Button, Checkbox, PageHeader, Card, Divider, Avatar, List, Carousel, Tag } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Logo from './Images/logoHigh.png';
import EA from './Images/EA.png';
import Wisdom from './Images/wisdom.png';
import ExampleVideo from './Videos/0101 Intro.mp4';
import Cover from './Images/cover.png';
import LogoWhite from './Images/logoHighWhite.png';

import $, {jQuery} from 'jquery';

import moment from 'moment';

const { SubMenu } = Menu;
const { Meta } = Card;
const {Search} = Input;
const { Paragraph } = Typography;

function App() {
	return (
		<div className="App">
			<PraxisApp />
		</div>
	);
  	
}

class PraxisApp extends Component {
	state = {
	    current: 'video',
	};

	handleClick = e => {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	};
	render(){
		return (
	    	<div className="App">
		    	<Router>
		        	<Menu className="nav" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
				        <Menu.Item style={{float:'right'}} key="user">
				        	<Link to="/user">
					          	<Icon type="user" />
					          	User
				          	</Link>
				        </Menu.Item>

				        <Menu.Item style={{float:'left'}} key="logo">
				          <img style={{marginTop:'-8px'}} height={30} src={Logo}/>
				        </Menu.Item>
				        <Menu.Item style={{float:'right'}} key="login">
				        	<Link to="/login">
					        	<Icon type="login" />
					            Log in
				            </Link>
				        </Menu.Item>
				        <Menu.Item style={{float:'right'}} key="blackboard">
				        	<Link to="/blackboard">
					          <Icon type="interaction" />
					          Blackboard
					        </Link>
				        </Menu.Item>
				        <Menu.Item style={{float:'right'}} key="video">
				        	<Link to="/">
					          	<Icon type="video-camera" />
					          	Video Gallery
				          	</Link>
				        </Menu.Item>
				        <Menu.Item style={{float:'right'}} key="camera">
				        	<Link to="/video-page">
					          	<Icon type="camera" />
					          	Video Page
				          	</Link>
				        </Menu.Item>
				        
				    </Menu>

			        <div className="container">
			        	<Route path="/" component={Video} exact/>
			        	<Route path="/blackboard" component={Blackboard} />
			            <Route path="/login" component={User}/>
			            <Route path="/user" component={UserPage}/>
			            <Route path="/video-page" component={VideoPage}/>
			       	</div>

		       	</Router>
		    </div>
	  	);
	}
}



const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
];
class VideoPage extends Component {
	render(){
		return(
			<div className="page">
				<div className="video-page-left">
					<Card>
						<video width="100%" controls>
							<source src={ExampleVideo} type="video/mp4" />
						</video>
						<h2 style={{marginTop:'10px'}}>【ENG SUB】Chinese RestaurantEP.2Dongyu Is Impressed By Sean's Cooking Skill</h2>
						<div >
							<p>1,000,000 Views<Divider type="verticle" /><Icon type="like" />1,000<Divider type="verticle" /><Icon type="message" />100</p>
						</div>
						<Divider />
						
						<List
						    className="comment-list"
						    header={`${data.length} replies`}
						    itemLayout="horizontal"
						    dataSource={data}
						    renderItem={item => (
						      <li>
						        <Comment
						          actions={item.actions}
						          author={item.author}
						          avatar={item.avatar}
						          content={item.content}
						          datetime={item.datetime}
						        />
						      </li>
						    )}
						  />
					</Card>
				</div>
				<div className="video-page-right">
					<Card>
						<PageHeader style={{margin:0,padding:0,height:'20px !important'}} title={<p><Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> Professor Alan</p>} subTitle="Posted by Professor Alan 7 hours ago">
						<Paragraph style={{textAlign:'left'}}>
					      Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
					      easier for designers to have a clear psychological expectation of color when adjusting colors,
					      as well as facilitate communication in teams.
					    </Paragraph>
						</PageHeader>
						<Divider />
						<h3>Related Videos</h3>
					</Card>
				</div>
			</div>
		);
	}
}




class Blackboard extends Component {
	render(){
		return(
			<div className="page">
				<div style={{minHeight:520,marginBottom:50,}}>
				    <MyNav />
				    <Container />
				</div>
			</div>
		);
	}
}


class MyNav extends Component {
	state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail" disabled>
          <Search
		      placeholder="Search Praxis Blackboard"
		      onSearch={value => console.log(value)}
		      style={{ width: 400 }}
		    />
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="rocket" />
              BEST
              <Icon type="caret-down" />
            </span>
          }
        >
            <Menu.Item key="setting:1"><Icon type="rocket" />Best</Menu.Item>
            <Menu.Item key="setting:3"><Icon type="fire" />Hot</Menu.Item>
            <Menu.Item key="setting:2"><Icon type="build" />New</Menu.Item>
            <Menu.Item key="setting:4"><Icon type="rise" />Rising</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

class Container extends Component {

	render(){
		const data = [
		  {
		  	number:'1',
		    title: 'Enterprise Agility',
		  },
		  {
		  	number:'2',
		    title: 'Agile/Scrum',
		  },
		  {
		  	number:'3',
		    title: 'Project Management',
		  },
		  {
		  	number:'4',
		    title: 'Leadership',
		  },
		  {
		  	number:'5',
		    title: 'Start a Business',
		  },
		];
		return(
			<div className="blackboard-page">
				<div style={{width:'100%'}}>
					<Card 
						style={{ textAlign:'left', float:'right', width: 300}}
						cover={<img alt="example" src={Wisdom} />}
					>
						<div className="card-content">
							<div className="card-title">
								<List
								    itemLayout="horizontal"
								    dataSource={data}
								    renderItem={item => (
								      <List.Item>
								        <List.Item.Meta
								          title={<p><span>{item.number+" "}</span><Icon type="caret-up" style={{color:'green'}}/> <a href="#">{item.title}</a> </p>}
								        />
								      </List.Item>
								    )}
								  />
							</div>
						</div>
					</Card>

					<Card
						hoverable
			          style={{ textAlign:'left',width: 680, marginTop: 16 }}
			          title={<PageHeader style={{margin:0,padding:0,height:'20px !important'}} title={<p><Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> Professor Alan</p>} subTitle="Posted by Professor Alan 7 hours ago" />}
			          actions={[
			          	<span><Icon type="like"  /> 1000 </span>,
			          	<span><Icon type="message"  /> 300 </span>,
			            <Icon type="ellipsis" key="ellipsis" />,
			          ]}
			        >
			        	<div className="card-content">
			        		<h2>What is Enterprise Agility? Here list some brief introduction to the basic concept of Enterprise Agility.</h2>
			        		<img src={EA} width='100%'/>
			        	</div>
			        </Card>

			        <Card
						hoverable
			          style={{ textAlign:'left',width: 680, marginTop: 16 }}
			          title={<PageHeader style={{margin:0,padding:0,height:'20px !important'}} title={<p><Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> Professor CJ</p>} subTitle="Posted by Professor CJ 7 hours ago" />}
			          actions={[
			          	<span><Icon type="like"  /> 1000 </span>,
			          	<span><Icon type="message"  /> 300 </span>,
			            <Icon type="ellipsis" key="ellipsis" />,
			          ]}
			        >
			        	<div className="card-content">
			        		<h2>What is Enterprise Agility? Here list some brief introduction to the basic concept of Enterprise Agility.</h2>
			        	</div>
			        </Card>

			        <Card
						hoverable
			          style={{ textAlign:'left',width: 680, marginTop: 16 }}
			          title={<PageHeader style={{margin:0,padding:0,height:'20px !important'}} title={<p><Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> Professor Alan</p>} subTitle="Posted by Professor Alan 7 hours ago" />}
			          actions={[
			          	<span><Icon type="like"  /> 1000 </span>,
			          	<span><Icon type="message"  /> 300 </span>,
			            <Icon type="ellipsis" key="ellipsis" />,
			          ]}
			        >
			        	<div className="card-content">
			        		<h2>What is Enterprise Agility? Here list some brief introduction to the basic concept of Enterprise Agility.</h2>
			        		<img src={EA} width='100%'/>
			        	</div>
			        </Card>
			        
				</div>
			</div>
		);
	}
}











class Video extends Component{
	render(){
		return(
			<div className="page">
				<div style={{minHeight:520,marginBottom:50,}}>
				    <MyMenu />
				    <Home />
				</div>
			</div>
		);
	}
}

class MyMenu extends React.Component {
  // submenu keys of first level

  state = {
	    current: '1',
	};

	handleClick = e => {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	};

  render() {
    return (
      <Menu
        mode="inline"
        onClick={this.handleClick} selectedKeys={[this.state.current]}
        style={{ position:'fixed',paddingTop:10,width: 230, height:'100%', textAlign:'left' }}
      >
        
        <Menu.Item className="item" key="1"><Icon type="home"/>Home</Menu.Item>
        <Menu.Item className="item" key="2"><Icon type="fire"/>Trending</Menu.Item>
        <Menu.Item className="item" key="3"><Icon type="star"/>Marked</Menu.Item>
        <Menu.Item className="item" key="4"><Icon type="like"/>Liked</Menu.Item>
        <Divider />
        <PageHeader style={{paddingTop:0}} title="Programs" />
        <Menu.Item className="item" key="5"><Icon type="project"/>Project Management</Menu.Item>
        <Menu.Item className="item" key="6"><Icon type="apartment"/>Enterprise Agility</Menu.Item>
        <Menu.Item className="item" key="7"><Icon type="branches"/>Agile/Scrum</Menu.Item>
        <Divider />
        <Menu.Item className="item" key="8"><Icon type="question-circle"/>Help</Menu.Item>
        <Menu.Item className="item" key="9"><Icon type="message"/>Send Feedback</Menu.Item>
        <Menu.Item className="item" key="10"><Icon type="team"/>About Us</Menu.Item>
        <Menu.Item className="item" key="11"><Icon type="mail"/>Contact Us</Menu.Item>
        <Menu.Item className="item" key="12"><Icon type="contacts"/>Consulting</Menu.Item>
        <Menu.Item key="15">Copyright © 2019 Praxis</Menu.Item>
      </Menu>
    );
  }
}

class Home extends Component {
	render(){
		return(
			<div className="video-page">
				<div style={{height:640}}>
					<h3>Recommended</h3>
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<h4 style={{marginTop:20,float:'left',color:'#666'}}>SHOW MORE</h4>
				</div>
				<Divider />
				<div style={{height:340}}>
					<h3><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> Professor Alan</h3>
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
				</div>
				<Divider />
				<div style={{height:340}}>
					<h3><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> Professor CJ</h3>
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
				</div>
				<Divider />
				<div style={{height:340}}>
					<h3><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/> Enterprise Agility</h3>
					<VideoItem />
					<VideoItem />
					<VideoItem />
					<VideoItem />
				</div>

			</div>
		);
	}
}

class VideoItem extends Component {
	render(){
		return(
			<Card
				hoverable
			    className="video-item"
			    cover={
			      <img
			        src={Cover}
			      />
			    }
			>
			    <Meta
			      title="Enterprise Agility Intro"
			      description={<p>Professor CJ<br/>234K views · 1 day ago</p>}
			    />
			</Card>
		);
	}
}





class User extends Component {

	state={
		password:'',
		username:'',
	}
	handleSubmit = () => {
		let values ={
			username:this.state.username,
			password:this.state.password,
		}
		$.ajax({
	        url: 'http://localhost:7000/loginUser',
	        type: 'POST',
	        dataType: 'json',
	        data:{
	            username:values.username,
	        },
	        success: data => {
	        
	        	console.log(data[0].password===values.password?"login correct":"login wrong");
	        },
	    });
	}
	 

	render(){

		console.log(this.props.form);
		return(
			<div className="page">
				<div style={{paddingTop:50,minHeight:521,marginBottom:50}}>
				    <Card title={"Log in to Praxis"} style={{margin:'0 auto',maxWidth:340,padding:20}}>
				    	<Form className="login-form">
				         <Form.Item>
				            <Input
				              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
				              placeholder="Username" onChange={(e) => this.setState({username:e.target.value})}
				            />
				        </Form.Item>
				        <Form.Item>
				            <Input
				              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
				              type="password"
				              placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}
				            />
				        </Form.Item>
				        <Form.Item style={{textAlign:'left'}}>
				          <Checkbox>Remember me</Checkbox>
				          <a className="login-form-forgot" style={{float: 'right'}} href="">
				            Forgot password
				          </a>
				          <Button onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
				            Log in
				          </Button>
				          Or <a href="">register now!</a>
				        </Form.Item>
				      </Form>
				    </Card>
				</div>
				<Footer />
			</div>
		);
	}
}



// class NormalLoginForm extends React.Component {
// 	state={
// 		current:'',
// 	}
	
// 	  handleSubmit = e => {
// 	    e.preventDefault();
// 	    this.props.form.validateFields((err, values) => {
// 	      if (!err) {
// 	     //    $.ajax({
// 		    //     url: 'http://localhost:7000/loginUser',
// 		    //     type: 'POST',
// 		    //     dataType: 'json',
// 		    //     data:{
// 		    //         username:values.username,
// 		    //     },
// 		    //     success: data => {
		        
// 		    //     	console.log(data[0].password===values.password?"login correct":"login wrong");

// 		    //     	this.setState({curren})
// 		    //     },
// 		    // });

// 		    this.setState({current:'Yuhao Cai'});
// 	      }
// 	    });
// 	  };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form onSubmit={this.handleSubmit} className="login-form">
//         <Form.Item>
//           {getFieldDecorator('username', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               type="password"
//               placeholder="Password"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item style={{textAlign:'left'}}>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(<Checkbox>Remember me</Checkbox>)}
//           <a className="login-form-forgot" style={{float: 'right'}} href="">
//             Forgot password
//           </a>
//           <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </Form.Item>
//       </Form>
//     );
//   }
// }
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


class UserPage extends Component {
	render(){
		return(
			<div className="page">
				<div style={{minHeight:520,marginBottom:50}}>
				    <UserNav />
				    <UserContainer />
				</div>
			</div>
		);
	}
}


class UserNav extends Component {
	state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item className="item" key="5"><Icon type="project"/>Project Management</Menu.Item>
        <Menu.Item className="item" key="6"><Icon type="apartment"/>Enterprise Agility</Menu.Item>
        <Menu.Item className="item" key="7"><Icon type="branches"/>Agile/Scrum</Menu.Item>
      </Menu>
    );
  }
}

class UserContainer extends Component {
	render(){
		return(
			<div className="user-page">
				<div>
					<Carousel autoplay>
					    <div>
					      <h3>Advertisement 1</h3>
					    </div>
					    <div>
					      <h3>Advertisement 2</h3>
					    </div>
					    <div>
					      <h3>Advertisement 3</h3>
					    </div>
					    <div>
					      <h3>Advertisement 4</h3>
					    </div>
					  </Carousel>
				</div>
				<div style={{textAlign:'left',paddingTop:20}}>
					<h2 style={{float:'left'}}  >Welcome back, User </h2>
					<Tag style={{float:'right'}} color="purple">Prime Membership</Tag>
					<Card style={{float:'left'}} hoverable>
						<Descriptions title="Basic Information">
						    <Descriptions.Item label="UserName">Yuhao Cai</Descriptions.Item>
						    <Descriptions.Item label="Mobile">(123) 456-7890</Descriptions.Item>
						    <Descriptions.Item label="Membership">Prime</Descriptions.Item>
						    <Descriptions.Item label="State">WA</Descriptions.Item>
						    <Descriptions.Item label="City">Seattle</Descriptions.Item>
						</Descriptions>
						<Divider />
						<Descriptions title="Academic Career">
						    <Descriptions.Item label="Direction">Project Management</Descriptions.Item>
						    <Descriptions.Item label="Program Enrolled">Enterprise Agility</Descriptions.Item>
						    <Descriptions.Item label="Certificates">
						      3
						    </Descriptions.Item>
						     <Descriptions.Item label="Obsolete Level">
						      2
						    </Descriptions.Item>
						    <Descriptions.Item label="Videos Viewed">
						      58
						    </Descriptions.Item>
						    <Descriptions.Item label="Posts">
						      17
						    </Descriptions.Item>
						</Descriptions>
					</Card>
				</div>
				<div style={{float:'left',marginTop:'20px'}}>
					<Button size="large" type='link'>Havn't taken the survey for only PRIME Members?</Button>
				</div>
				<div style={{float:'left',width:'100%',textAlign:'left',paddingTop:20,marginBottom:20}}>
					<h2>What to learn next</h2>
					<Card hoverable>
						<VideoItem />
						<VideoItem />
						<VideoItem />
						<div style={{textAlign:'center',marginTop:'10%'}}>
							<Button size="large" shape="circle" icon="right" />
							<p style={{floar:'left'}}>View More</p>
						</div>
					</Card>
				</div>
			</div>
		);
	}
}

class Footer extends Component {
	render(){
		return(
			<div className="footer" style={{paddingLeft:'8%',paddingRight:'8%',paddingTop:'30px',textAlign:'left'}}>
				<div style={{float:'left',paddingTop:20}}>
					<img src={LogoWhite} width="150" />
					<h2 style={{color:'#fff',fontWeight:'bold'}}>PRAXIS CONSULTING</h2>
				</div>
				<div style={{float:'right'}}>
					<h2 style={{color:'#fff'}}>CONTACT US</h2>
					<div style={{marginBottom:20}}>
						<Button icon="facebook" shape="circle"/>
						<Divider type="verticle" />
						<Button icon="twitter" shape="circle"/>
						<Divider type="verticle" />

						<Button icon="mail" shape="circle"/>
						<Divider type="verticle" />
						
						<Button icon="youtube" shape="circle"/>
						<Divider type="verticle" />
						
						<Button icon="linkedin" shape="circle"/>
					</div>
					<div style={{marginTop:'10'}}>
						<p style={{color:'#fff'}}>11056 SE 201st Place · Kent · WA · 98031 · United States</p>
						<p style={{color:'#FFF'}}>Copyright © 2019 Praxis</p>
					</div>
				</div>
			</div>
		);
	}
}







export default App;
