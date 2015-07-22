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