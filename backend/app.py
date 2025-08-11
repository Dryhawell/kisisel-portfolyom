from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)
CORS(app)

# E-posta ayarları
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USERNAME = "talhatrlbz@gmail.com"
SMTP_PASSWORD = os.environ.get("EMAIL_PASSWORD")  # Gmail App Password

@app.route('/send_email', methods=['POST'])
def send_email():
    try:
        data = request.form
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # E-posta oluştur
        msg = MIMEMultipart()
        msg['From'] = SMTP_USERNAME
        msg['To'] = SMTP_USERNAME  # Kendinize gönderiyorsunuz
        msg['Subject'] = f"Portfolyo Sitesi İletişim Formu - {name}"

        body = f"""
        İsim: {name}
        E-posta: {email}
        
        Mesaj:
        {message}
        """
        
        msg.attach(MIMEText(body, 'plain'))

        # E-posta gönder
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)

        return jsonify({"message": "E-posta başarıyla gönderildi"}), 200

    except Exception as e:
        print(f"Hata: {str(e)}")
        return jsonify({"error": "E-posta gönderilirken bir hata oluştu"}), 500

if __name__ == '__main__':
    app.run(debug=True)
