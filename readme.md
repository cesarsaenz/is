1) Create group:
XOfficeGroup
6f4b842c-c3db-4678-8039-55ac94ec5b56
2) Create Office class:
XOfficeClass
(address, providerName, transferPhoneNumber,emergencyPhoneNumber,openTime,lunchTime,closeTime)
3) Add Office class to group
4) Create Event class:
XEventClass
(name, start_date_time, end_date_time)
5) Add Event class to group
6) Create Notes class:
XNotesClass
(oid, notes)
7) Add Notes class to group

8*) Create User
App apikey? 24fb70f2-8f60-4cfc-8b7f-870ec1754cc0
First name? Staff
Email? cesar.saenz+is@gmail.com
Username? isStaff
Password? pass123
Type?[patient,staff,provider] is_staff
Extras?[entryId or apitoken] na
got back userId: 4e97abf4-cdb4-4ce1-8927-d6a515b1f045

9*) Add User as member of group



    listen 80;
    server_name oncampusapps.com;
    root /home/forge/oncampusapps.com/public;

    # FORGE SSL (DO NOT REMOVE!)
    # ssl_certificate;
    # ssl_certificate_key;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/oncampusapps.com-error.log error;

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php5-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }


server {
    listen 80;
    server_name esugarkiss.com;
    root /home/forge/esugarkiss.com/public;

    # FORGE SSL (DO NOT REMOVE!)
    # ssl_certificate;
    # ssl_certificate_key;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        # X-Real-IP $remote_addr;
        #proxy_set_header Host $http_host;
        #proxy_set_header X-Nginx-Proxy true;
        
        #proxy_pass http://127.0.0.1:8080
        #proxy_redirect off;
        proxy_pass http://10.132.99.211:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;        
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/esugarkiss.com-error.log error;


}