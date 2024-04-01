import type { Content, File } from 'newt-client-js';
import type { Client } from './client';
import type { Member } from './member';
import type { Domain } from './domain';
import type { TechnologyStack } from './technologyStack';
import type { ProjectType } from './projectType';
import type { Partner } from './partner';

/**
 * カスタムフィールド
 */
interface CustomField {
  _id: string;
  title: string;
}

/**
 * プロジェクトにおける役割とそのメンバー
 */
interface Role {
  _id: string;
  title: string;
  data: {
    /**
     * 役割
     */
    domain: Domain;
  
    /**
     * メンバー
     */
    members: Member[];
  }
}

/**
 * コンテンツセクション
 */
interface Section {
  _id: string;
  title: string;
  data: {
    /**
     * セクションのタイトル
     */
    title: string;
  
    /**
     * 説明文
     */
    description?: string;
  
    /**
     * ビジュアル
     */
    visuals?: File[];
  }
}

/**
 * プロジェクト
 */
export interface Work extends Content {
  /**
   * id
   */
  _id: string;

  /**
   * タイトル
   */
  title: string;

  /**
   * プロジェクトのスラッグ
   */
  slug: string;

  /**
   * プロジェクトの概要
   */
  outline?: string;

  /**
   * クライアント
   */
  client?: Client;

  /**
   * 代理店や共同開発先
   */
  partners?: Partner[];

  /**
   * URL
   */
  url?: string;

  /**
   * リリース日時
   */
  releaseDate?: string;

  /**
   * 開発期間
   */
  productionPeriod?: string;

  /**
   * プロジェクトタイプ
   */
  projectTypes?: ProjectType[];

  /**
   * 業務領域
   */
  domains?: Domain[];

  /**
   * 技術スタック
   */
  technologyStacks?: TechnologyStack[];

  /**
   * チーム
   */
  teams?: Role[];

  /**
   * ヒーロービジュアル
   */
  heroVisual?: File;

  /**
   * コンテンツセクション
   */
  sections?: Section[];
}
  