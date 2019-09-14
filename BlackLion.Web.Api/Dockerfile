FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["BlackLion.Web.Api/BlackLion.Web.Api.csproj", "BlackLion.Web.Api/"]
RUN dotnet restore "BlackLion.Web.Api/BlackLion.Web.Api.csproj"
COPY . .
WORKDIR "/src/BlackLion.Web.Api"
RUN dotnet build "BlackLion.Web.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "BlackLion.Web.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "BlackLion.Web.Api.dll"]