FROM python:3.7.12-slim

ADD ./ /opt/otree
COPY startup.sh /opt/otree/startup.sh
RUN ["chmod", "+x", "/opt/otree/startup.sh"]
WORKDIR /opt/otree
EXPOSE 80

RUN cd /opt/otree && pip install -r requirements_base.txt && yes y | otree resetdb

ENTRYPOINT ["/opt/otree/startup.sh"]