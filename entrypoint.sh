echo "Instalando dependências..."
npm install

echo "Migrando..."
npx sequelize db:migrate

echo "Buildando aplicação..."
npm run build
