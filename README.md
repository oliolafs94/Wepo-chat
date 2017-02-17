# Development manual for Wepo-Chat
##Please follow these steps to be able to run the Chat: </br>
###1. Create Github Account
If you don't already have a Github account you'll have to create one before you try to run the project, since all our code is stored at Github. You can create account here --> http://wwww.github.com/join?source=header-home.
###2. Clone repository to your Ubuntu user account<br />
Sign in to the Ubuntu server as the user you created with the command __ssh your_username@82.221.48.15__. <br />
After you have signed in you can clone the repository from git at the root of the Server.
To clone the repository you have to use the command __git clone https://github.com/oliolafs94/Wepo-chat.git__. <br />

###3. What you need to install, and other information <br />
To be able to run this program you have to install couple of things, these things are following --> apt-get install nodejs, and then --> npm install -g angular-cli.
After install you can access it by typing cd client and run this command --> ng serve, doing this you will compile the code, then you have open a new window and access the server folder using the command cd server and type in node chatserver, then you can enter the localhost.
