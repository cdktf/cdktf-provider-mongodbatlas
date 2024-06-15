// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/control_plane_ip_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMongodbatlasControlPlaneIpAddressesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataMongodbatlasControlPlaneIpAddressesInbound {
}

export function dataMongodbatlasControlPlaneIpAddressesInboundToTerraform(struct?: DataMongodbatlasControlPlaneIpAddressesInbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasControlPlaneIpAddressesInboundToHclTerraform(struct?: DataMongodbatlasControlPlaneIpAddressesInbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasControlPlaneIpAddressesInboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasControlPlaneIpAddressesInbound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasControlPlaneIpAddressesInbound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new cdktf.StringListMap(this, "aws");
  public get aws() {
    return this._aws;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new cdktf.StringListMap(this, "azure");
  public get azure() {
    return this._azure;
  }

  // gcp - computed: true, optional: false, required: false
  private _gcp = new cdktf.StringListMap(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
}
export interface DataMongodbatlasControlPlaneIpAddressesOutbound {
}

export function dataMongodbatlasControlPlaneIpAddressesOutboundToTerraform(struct?: DataMongodbatlasControlPlaneIpAddressesOutbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMongodbatlasControlPlaneIpAddressesOutboundToHclTerraform(struct?: DataMongodbatlasControlPlaneIpAddressesOutbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMongodbatlasControlPlaneIpAddressesOutbound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMongodbatlasControlPlaneIpAddressesOutbound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new cdktf.StringListMap(this, "aws");
  public get aws() {
    return this._aws;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new cdktf.StringListMap(this, "azure");
  public get azure() {
    return this._azure;
  }

  // gcp - computed: true, optional: false, required: false
  private _gcp = new cdktf.StringListMap(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/control_plane_ip_addresses mongodbatlas_control_plane_ip_addresses}
*/
export class DataMongodbatlasControlPlaneIpAddresses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_control_plane_ip_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMongodbatlasControlPlaneIpAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMongodbatlasControlPlaneIpAddresses to import
  * @param importFromId The id of the existing DataMongodbatlasControlPlaneIpAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/control_plane_ip_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMongodbatlasControlPlaneIpAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_control_plane_ip_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.17.1/docs/data-sources/control_plane_ip_addresses mongodbatlas_control_plane_ip_addresses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMongodbatlasControlPlaneIpAddressesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMongodbatlasControlPlaneIpAddressesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_control_plane_ip_addresses',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.17.1',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // inbound - computed: true, optional: false, required: false
  private _inbound = new DataMongodbatlasControlPlaneIpAddressesInboundOutputReference(this, "inbound");
  public get inbound() {
    return this._inbound;
  }

  // outbound - computed: true, optional: false, required: false
  private _outbound = new DataMongodbatlasControlPlaneIpAddressesOutboundOutputReference(this, "outbound");
  public get outbound() {
    return this._outbound;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
