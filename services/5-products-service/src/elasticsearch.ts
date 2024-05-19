import { Client } from '@elastic/elasticsearch';
import { ClusterHealthResponse } from '@elastic/elasticsearch/lib/api/types';
import { config } from '@products/config';
import winstonLogger from '@products/utils/logger';
import { bool } from 'joi';

const logger = winstonLogger('debug');

export const elasticSearchClient = new Client({
  node: `${config.ELASTIC_SEARCH_URL}`
});

const checkConnection = async (): Promise<void> => {
  let isConnected = false;
  try {
    const health: ClusterHealthResponse = await elasticSearchClient.cluster.health({});
    logger.info(`products service elastic search health status - ${health.status}`);
    isConnected = true;
  } catch (error) {
    logger.error('connection to Elastic search faild .. retrying ...');
    logger.log('error', 'products service checkConnection() : ', error);
    process.exit(-1);
  }
};

const checkIfExist = async (indexName: string): Promise<boolean> => {
  const result: boolean = await elasticSearchClient.indices.exists({
    index: indexName
  });
  return result;
};

const createIndex = async (index: string) => {
  try {
    const checkIndexName: boolean = await checkIfExist(index);
    if (!!checkIndexName) {
      logger.info(`${index} is already in elastic search`);
    } else {
      await elasticSearchClient.indices.create({ index });
      await elasticSearchClient.indices.refresh({ index });
      logger.info(`${index} create in elastic search`);
    }
  } catch (error) {
    logger.log('error', 'products service createIndex() : ', error);
  }
};


export interface ElasticsearchSearchResponse<T> {
  hits: {
    total: {
      value: number;
    };
    hits: {
      _source: T;
    }[];
  };
}

export { checkConnection, createIndex };
