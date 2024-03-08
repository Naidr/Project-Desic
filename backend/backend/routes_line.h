#ifndef ROUTES_LINE_H
#define ROUTES_LINE_H

#include <QCoreApplication>
#include <QSqlError>
#include <QJsonDocument>
#include <QJsonArray>
#include <QJsonObject>
#include <QJsonValue>
#include <QList>
#include <QDebug>
#include <QHttpServer>
#include <QHttpServerRequest>
#include <QHttpServerResponse>
#include <QSqlQuery>

class Routes_Line
{
public:
    static void setupRoutes(QHttpServer& httpServer);
};

#endif // ROUTES_LINE_H
