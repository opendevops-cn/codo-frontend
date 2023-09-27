FROM rockylinux:9.1
# 设置编码
ENV LANG C.UTF-8

# 同步时间
ENV TZ=Asia/Shanghai


ADD default.conf /etc/nginx/conf.d/
#ADD nginx.repo /etc/yum.repos.d/
RUN yum install -y nginx 1>/dev/null && \
  mkdir -p /data/h5/ /data/logs/ && \
  chmod -R a+x /data/h5/ 

COPY . /data/h5/

EXPOSE 80
CMD ["/usr/sbin/nginx", "-g","daemon off;"]
