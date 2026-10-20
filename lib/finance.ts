export interface WalletSummary {
  totalBalance: number;
  verifiedContributions: number;
  outstanding: number;
  pendingApprovals: number;
}

export const MOCK_WALLET_SUMMARY: WalletSummary = {
  totalBalance: 2480000,
  verifiedContributions: 861000,
  outstanding: 96000,
  pendingApprovals: 4
};
