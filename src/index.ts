import "dotenv/config";
import "module-alias/register";

import createServer from "@/configs/server";

(async () => {
  const app = await createServer();
  const PORT = process.env.PORT || 3001;

  app.listen(PORT, async () => {
    console.log(`[SERVER]: Running at http://localhost:${PORT}`);
  });
})();
