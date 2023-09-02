-- Global setting: space is the best leader key!
vim.g.mapleader = " "

-- Jump to netrw suuuuuper quick
vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)

-- Disable arrow keys (git gud!)
vim.keymap.set("","<up>", "<nop>")
vim.keymap.set("","<down>", "<nop>")
vim.keymap.set("","<left>", "<nop>")
vim.keymap.set("","<right>", "<nop>")
