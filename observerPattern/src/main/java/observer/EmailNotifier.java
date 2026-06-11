package main.java.observer;

public class EmailNotifier implements Observer {

    private String email;

    public EmailNotifier(String emailId) {
        this.email = emailId;
    }

    @Override
    public void update() {
        SendEmail(email, "Product is in inventory again please hurry up!!");
    }

    private void SendEmail(String email, String msg) {
        System.out.println("Message sent to :" + email + " Message: " + msg);
    }

}
