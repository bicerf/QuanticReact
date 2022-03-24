import { Card } from "antd";
import { List, Avatar } from 'antd';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AccountService } from "../services/account-service";

function UsersListPage() {
  const [user, setUser] = useState([]);
  useEffect(async () => {
    let response = await AccountService.getAllUsers();
    setUser(response);
    console.log("ALLUSERS", response);
  }, []);

  return (
    <div>
      <div className="site-card-border-less-wrapper">
        {user &&
          user.map((item) => {
            return (
              <>
                <List style={{width:100}}>
                <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<Link to="/">{item.email}</Link>}

                />
            </List.Item>
                </List>
              </>
            );
          })}
      </div>
    </div>
  );
}


export default UsersListPage;
{/* <Card title={item.email} bordered={false} style={{ width: 300 }}>
<p>{item.email}</p>
<p>{item.email}</p>
</Card> */}