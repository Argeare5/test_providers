/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IVotingMachineWithProofs {
  export type ProposalWithoutVotesStruct = {
    id: PromiseOrValue<BigNumberish>;
    l1BlockHash: PromiseOrValue<BytesLike>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
    forVotes: PromiseOrValue<BigNumberish>;
    againstVotes: PromiseOrValue<BigNumberish>;
    votingEndedBlock: PromiseOrValue<BigNumberish>;
    sentToL1: PromiseOrValue<boolean>;
    strategy: PromiseOrValue<string>;
  };

  export type ProposalWithoutVotesStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    string
  ] & {
    id: BigNumber;
    l1BlockHash: string;
    startTime: BigNumber;
    endTime: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
    votingEndedBlock: BigNumber;
    sentToL1: boolean;
    strategy: string;
  };

  export type VoteStruct = {
    support: PromiseOrValue<boolean>;
    votingPower: PromiseOrValue<BigNumberish>;
  };

  export type VoteStructOutput = [boolean, BigNumber] & {
    support: boolean;
    votingPower: BigNumber;
  };

  export type VotingBalanceProofStruct = {
    underlyingAsset: PromiseOrValue<string>;
    slot: PromiseOrValue<BigNumberish>;
    proof: PromiseOrValue<BytesLike>;
  };

  export type VotingBalanceProofStructOutput = [string, BigNumber, string] & {
    underlyingAsset: string;
    slot: BigNumber;
    proof: string;
  };
}

export interface IVotingMachineWithProofsInterface extends utils.Interface {
  functions: {
    "BLOCKS_TO_FINALITY()": FunctionFragment;
    "CHAIN_ID()": FunctionFragment;
    "closeVote(uint256)": FunctionFragment;
    "create(uint256)": FunctionFragment;
    "getProposalById(uint256)": FunctionFragment;
    "getProposalState(uint256)": FunctionFragment;
    "getVote(address,uint256)": FunctionFragment;
    "l2SideBridge()": FunctionFragment;
    "rootsWarehouse()": FunctionFragment;
    "sendVoteResult(uint256)": FunctionFragment;
    "setL2SideBridge(address)": FunctionFragment;
    "setRootsWarehouse(address)": FunctionFragment;
    "setVotingStrategy(address)": FunctionFragment;
    "slotOfAddressUint256Mapping(address,uint256)": FunctionFragment;
    "submitVote(uint256,bool,(address,uint128,bytes)[])": FunctionFragment;
    "votingStrategy()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BLOCKS_TO_FINALITY"
      | "CHAIN_ID"
      | "closeVote"
      | "create"
      | "getProposalById"
      | "getProposalState"
      | "getVote"
      | "l2SideBridge"
      | "rootsWarehouse"
      | "sendVoteResult"
      | "setL2SideBridge"
      | "setRootsWarehouse"
      | "setVotingStrategy"
      | "slotOfAddressUint256Mapping"
      | "submitVote"
      | "votingStrategy"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BLOCKS_TO_FINALITY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CHAIN_ID", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "closeVote",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalById",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalState",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVote",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "l2SideBridge",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rootsWarehouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendVoteResult",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setL2SideBridge",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRootsWarehouse",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingStrategy",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "slotOfAddressUint256Mapping",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitVote",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      IVotingMachineWithProofs.VotingBalanceProofStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "votingStrategy",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BLOCKS_TO_FINALITY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CHAIN_ID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "closeVote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProposalById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2SideBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rootsWarehouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendVoteResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setL2SideBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRootsWarehouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotingStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slotOfAddressUint256Mapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submitVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingStrategy",
    data: BytesLike
  ): Result;

  events: {
    "L2SideBridgeUpdated(address,address)": EventFragment;
    "ProposalCreated(uint256,bytes32,uint256,uint256,address)": EventFragment;
    "ProposalResultsSent(uint256,uint256,uint256)": EventFragment;
    "ProposalVoteClosed(uint256,uint256)": EventFragment;
    "RootsWarehouseUpdated(address,address)": EventFragment;
    "VoteEmitted(uint256,address,bool,uint256)": EventFragment;
    "VotingStrategyUpdated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "L2SideBridgeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalResultsSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalVoteClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootsWarehouseUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteEmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VotingStrategyUpdated"): EventFragment;
}

export interface L2SideBridgeUpdatedEventObject {
  oldL2SideBridge: string;
  newL2SideBridge: string;
}
export type L2SideBridgeUpdatedEvent = TypedEvent<
  [string, string],
  L2SideBridgeUpdatedEventObject
>;

export type L2SideBridgeUpdatedEventFilter =
  TypedEventFilter<L2SideBridgeUpdatedEvent>;

export interface ProposalCreatedEventObject {
  proposalId: BigNumber;
  l1BlockHash: string;
  startTime: BigNumber;
  endTime: BigNumber;
  strategy: string;
}
export type ProposalCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string],
  ProposalCreatedEventObject
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface ProposalResultsSentEventObject {
  proposalId: BigNumber;
  forVotes: BigNumber;
  againstVotes: BigNumber;
}
export type ProposalResultsSentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  ProposalResultsSentEventObject
>;

export type ProposalResultsSentEventFilter =
  TypedEventFilter<ProposalResultsSentEvent>;

export interface ProposalVoteClosedEventObject {
  proposalId: BigNumber;
  endedBlock: BigNumber;
}
export type ProposalVoteClosedEvent = TypedEvent<
  [BigNumber, BigNumber],
  ProposalVoteClosedEventObject
>;

export type ProposalVoteClosedEventFilter =
  TypedEventFilter<ProposalVoteClosedEvent>;

export interface RootsWarehouseUpdatedEventObject {
  oldRootsWarehouse: string;
  newRootsWarehouse: string;
}
export type RootsWarehouseUpdatedEvent = TypedEvent<
  [string, string],
  RootsWarehouseUpdatedEventObject
>;

export type RootsWarehouseUpdatedEventFilter =
  TypedEventFilter<RootsWarehouseUpdatedEvent>;

export interface VoteEmittedEventObject {
  proposalId: BigNumber;
  voter: string;
  support: boolean;
  votingPower: BigNumber;
}
export type VoteEmittedEvent = TypedEvent<
  [BigNumber, string, boolean, BigNumber],
  VoteEmittedEventObject
>;

export type VoteEmittedEventFilter = TypedEventFilter<VoteEmittedEvent>;

export interface VotingStrategyUpdatedEventObject {
  oldVotingStrategy: string;
  newVotingStrategy: string;
}
export type VotingStrategyUpdatedEvent = TypedEvent<
  [string, string],
  VotingStrategyUpdatedEventObject
>;

export type VotingStrategyUpdatedEventFilter =
  TypedEventFilter<VotingStrategyUpdatedEvent>;

export interface IVotingMachineWithProofs extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVotingMachineWithProofsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BLOCKS_TO_FINALITY(overrides?: CallOverrides): Promise<[BigNumber]>;

    CHAIN_ID(overrides?: CallOverrides): Promise<[number]>;

    closeVote(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    create(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getProposalById(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IVotingMachineWithProofs.ProposalWithoutVotesStructOutput]>;

    getProposalState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getVote(
      user: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IVotingMachineWithProofs.VoteStructOutput]>;

    l2SideBridge(overrides?: CallOverrides): Promise<[string]>;

    rootsWarehouse(overrides?: CallOverrides): Promise<[string]>;

    sendVoteResult(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setL2SideBridge(
      newL2SideBridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRootsWarehouse(
      newRootsWarehouse: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVotingStrategy(
      newVotingStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    slotOfAddressUint256Mapping(
      holder: PromiseOrValue<string>,
      balanceMappingPosition: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    submitVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<boolean>,
      votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    votingStrategy(overrides?: CallOverrides): Promise<[string]>;
  };

  BLOCKS_TO_FINALITY(overrides?: CallOverrides): Promise<BigNumber>;

  CHAIN_ID(overrides?: CallOverrides): Promise<number>;

  closeVote(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  create(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getProposalById(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVotingMachineWithProofs.ProposalWithoutVotesStructOutput>;

  getProposalState(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getVote(
    user: PromiseOrValue<string>,
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IVotingMachineWithProofs.VoteStructOutput>;

  l2SideBridge(overrides?: CallOverrides): Promise<string>;

  rootsWarehouse(overrides?: CallOverrides): Promise<string>;

  sendVoteResult(
    proposalId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setL2SideBridge(
    newL2SideBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRootsWarehouse(
    newRootsWarehouse: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVotingStrategy(
    newVotingStrategy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  slotOfAddressUint256Mapping(
    holder: PromiseOrValue<string>,
    balanceMappingPosition: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  submitVote(
    proposalId: PromiseOrValue<BigNumberish>,
    support: PromiseOrValue<boolean>,
    votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  votingStrategy(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BLOCKS_TO_FINALITY(overrides?: CallOverrides): Promise<BigNumber>;

    CHAIN_ID(overrides?: CallOverrides): Promise<number>;

    closeVote(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    create(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalById(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVotingMachineWithProofs.ProposalWithoutVotesStructOutput>;

    getProposalState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getVote(
      user: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IVotingMachineWithProofs.VoteStructOutput>;

    l2SideBridge(overrides?: CallOverrides): Promise<string>;

    rootsWarehouse(overrides?: CallOverrides): Promise<string>;

    sendVoteResult(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setL2SideBridge(
      newL2SideBridge: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRootsWarehouse(
      newRootsWarehouse: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVotingStrategy(
      newVotingStrategy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    slotOfAddressUint256Mapping(
      holder: PromiseOrValue<string>,
      balanceMappingPosition: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    submitVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<boolean>,
      votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    votingStrategy(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "L2SideBridgeUpdated(address,address)"(
      oldL2SideBridge?: null,
      newL2SideBridge?: null
    ): L2SideBridgeUpdatedEventFilter;
    L2SideBridgeUpdated(
      oldL2SideBridge?: null,
      newL2SideBridge?: null
    ): L2SideBridgeUpdatedEventFilter;

    "ProposalCreated(uint256,bytes32,uint256,uint256,address)"(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      l1BlockHash?: PromiseOrValue<BytesLike> | null,
      startTime?: null,
      endTime?: null,
      strategy?: null
    ): ProposalCreatedEventFilter;
    ProposalCreated(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      l1BlockHash?: PromiseOrValue<BytesLike> | null,
      startTime?: null,
      endTime?: null,
      strategy?: null
    ): ProposalCreatedEventFilter;

    "ProposalResultsSent(uint256,uint256,uint256)"(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      forVotes?: null,
      againstVotes?: null
    ): ProposalResultsSentEventFilter;
    ProposalResultsSent(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      forVotes?: null,
      againstVotes?: null
    ): ProposalResultsSentEventFilter;

    "ProposalVoteClosed(uint256,uint256)"(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      endedBlock?: null
    ): ProposalVoteClosedEventFilter;
    ProposalVoteClosed(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      endedBlock?: null
    ): ProposalVoteClosedEventFilter;

    "RootsWarehouseUpdated(address,address)"(
      oldRootsWarehouse?: null,
      newRootsWarehouse?: null
    ): RootsWarehouseUpdatedEventFilter;
    RootsWarehouseUpdated(
      oldRootsWarehouse?: null,
      newRootsWarehouse?: null
    ): RootsWarehouseUpdatedEventFilter;

    "VoteEmitted(uint256,address,bool,uint256)"(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      voter?: PromiseOrValue<string> | null,
      support?: null,
      votingPower?: null
    ): VoteEmittedEventFilter;
    VoteEmitted(
      proposalId?: PromiseOrValue<BigNumberish> | null,
      voter?: PromiseOrValue<string> | null,
      support?: null,
      votingPower?: null
    ): VoteEmittedEventFilter;

    "VotingStrategyUpdated(address,address)"(
      oldVotingStrategy?: null,
      newVotingStrategy?: null
    ): VotingStrategyUpdatedEventFilter;
    VotingStrategyUpdated(
      oldVotingStrategy?: null,
      newVotingStrategy?: null
    ): VotingStrategyUpdatedEventFilter;
  };

  estimateGas: {
    BLOCKS_TO_FINALITY(overrides?: CallOverrides): Promise<BigNumber>;

    CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    closeVote(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    create(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getProposalById(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVote(
      user: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    l2SideBridge(overrides?: CallOverrides): Promise<BigNumber>;

    rootsWarehouse(overrides?: CallOverrides): Promise<BigNumber>;

    sendVoteResult(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setL2SideBridge(
      newL2SideBridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRootsWarehouse(
      newRootsWarehouse: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVotingStrategy(
      newVotingStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    slotOfAddressUint256Mapping(
      holder: PromiseOrValue<string>,
      balanceMappingPosition: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<boolean>,
      votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    votingStrategy(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BLOCKS_TO_FINALITY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CHAIN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    closeVote(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    create(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getProposalById(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalState(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVote(
      user: PromiseOrValue<string>,
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    l2SideBridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rootsWarehouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendVoteResult(
      proposalId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setL2SideBridge(
      newL2SideBridge: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRootsWarehouse(
      newRootsWarehouse: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVotingStrategy(
      newVotingStrategy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    slotOfAddressUint256Mapping(
      holder: PromiseOrValue<string>,
      balanceMappingPosition: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitVote(
      proposalId: PromiseOrValue<BigNumberish>,
      support: PromiseOrValue<boolean>,
      votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    votingStrategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
