import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, Mic } from '@material-ui/icons';
import './Chat.css'
import db from './firebase';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = e => {
        e.prevenDefault();
        console.log('You type >>>', input);

        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo"> 
                    <h3>{roomName}</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Son</span>
                    Hey
                    <span className="timestamp">3.52 pm</span>
                </p>
            </div>
            <div className="footer">
                <InsertEmoticon />
                <form>
                    <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message" 
                        type="text" 
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;

