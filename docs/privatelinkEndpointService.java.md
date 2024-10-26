# `privatelinkEndpointService` Submodule <a name="`privatelinkEndpointService` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointService <a name="PrivatelinkEndpointService" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service mongodbatlas_privatelink_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointService;

PrivatelinkEndpointService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .endpointServiceId(java.lang.String)
    .privateLinkId(java.lang.String)
    .projectId(java.lang.String)
    .providerName(java.lang.String)
//  .endpoints(IResolvable)
//  .endpoints(java.util.List<PrivatelinkEndpointServiceEndpoints>)
//  .gcpProjectId(java.lang.String)
//  .id(java.lang.String)
//  .privateEndpointIpAddress(java.lang.String)
//  .timeouts(PrivatelinkEndpointServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoint_service_id PrivatelinkEndpointService#endpoint_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.privateLinkId">privateLinkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_link_id PrivatelinkEndpointService#private_link_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#project_id PrivatelinkEndpointService#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#provider_name PrivatelinkEndpointService#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#gcp_project_id PrivatelinkEndpointService#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#id PrivatelinkEndpointService#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_endpoint_ip_address PrivatelinkEndpointService#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.endpointServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoint_service_id PrivatelinkEndpointService#endpoint_service_id}.

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.privateLinkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_link_id PrivatelinkEndpointService#private_link_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#project_id PrivatelinkEndpointService#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#provider_name PrivatelinkEndpointService#provider_name}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.endpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoints PrivatelinkEndpointService#endpoints}

---

##### `gcpProjectId`<sup>Optional</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.gcpProjectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#gcp_project_id PrivatelinkEndpointService#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#id PrivatelinkEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointIpAddress`<sup>Optional</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.privateEndpointIpAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_endpoint_ip_address PrivatelinkEndpointService#private_endpoint_ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#timeouts PrivatelinkEndpointService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetGcpProjectId">resetGcpProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetPrivateEndpointIpAddress">resetPrivateEndpointIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putEndpoints"></a>

```java
public void putEndpoints(IResolvable OR java.util.List<PrivatelinkEndpointServiceEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putEndpoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putTimeouts"></a>

```java
public void putTimeouts(PrivatelinkEndpointServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

---

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetEndpoints"></a>

```java
public void resetEndpoints()
```

##### `resetGcpProjectId` <a name="resetGcpProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetGcpProjectId"></a>

```java
public void resetGcpProjectId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateEndpointIpAddress` <a name="resetPrivateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetPrivateEndpointIpAddress"></a>

```java
public void resetPrivateEndpointIpAddress()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointService;

PrivatelinkEndpointService.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointService;

PrivatelinkEndpointService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointService;

PrivatelinkEndpointService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointService;

PrivatelinkEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivatelinkEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivatelinkEndpointService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivatelinkEndpointService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivatelinkEndpointService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.awsConnectionStatus">awsConnectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.azureStatus">azureStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.deleteRequested">deleteRequested</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointGroupName">endpointGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList">PrivatelinkEndpointServiceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpStatus">gcpStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointConnectionName">privateEndpointConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointResourceId">privateEndpointResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference">PrivatelinkEndpointServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceIdInput">endpointServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointsInput">endpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectIdInput">gcpProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddressInput">privateEndpointIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkIdInput">privateLinkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkId">privateLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsConnectionStatus`<sup>Required</sup> <a name="awsConnectionStatus" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.awsConnectionStatus"></a>

```java
public java.lang.String getAwsConnectionStatus();
```

- *Type:* java.lang.String

---

##### `azureStatus`<sup>Required</sup> <a name="azureStatus" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.azureStatus"></a>

```java
public java.lang.String getAzureStatus();
```

- *Type:* java.lang.String

---

##### `deleteRequested`<sup>Required</sup> <a name="deleteRequested" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.deleteRequested"></a>

```java
public IResolvable getDeleteRequested();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `endpointGroupName`<sup>Required</sup> <a name="endpointGroupName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointGroupName"></a>

```java
public java.lang.String getEndpointGroupName();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpoints"></a>

```java
public PrivatelinkEndpointServiceEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList">PrivatelinkEndpointServiceEndpointsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `gcpStatus`<sup>Required</sup> <a name="gcpStatus" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpStatus"></a>

```java
public java.lang.String getGcpStatus();
```

- *Type:* java.lang.String

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.interfaceEndpointId"></a>

```java
public java.lang.String getInterfaceEndpointId();
```

- *Type:* java.lang.String

---

##### `privateEndpointConnectionName`<sup>Required</sup> <a name="privateEndpointConnectionName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointConnectionName"></a>

```java
public java.lang.String getPrivateEndpointConnectionName();
```

- *Type:* java.lang.String

---

##### `privateEndpointResourceId`<sup>Required</sup> <a name="privateEndpointResourceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointResourceId"></a>

```java
public java.lang.String getPrivateEndpointResourceId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeouts"></a>

```java
public PrivatelinkEndpointServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference">PrivatelinkEndpointServiceTimeoutsOutputReference</a>

---

##### `endpointServiceIdInput`<sup>Optional</sup> <a name="endpointServiceIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceIdInput"></a>

```java
public java.lang.String getEndpointServiceIdInput();
```

- *Type:* java.lang.String

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointsInput"></a>

```java
public java.lang.Object getEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>>

---

##### `gcpProjectIdInput`<sup>Optional</sup> <a name="gcpProjectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectIdInput"></a>

```java
public java.lang.String getGcpProjectIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateEndpointIpAddressInput`<sup>Optional</sup> <a name="privateEndpointIpAddressInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddressInput"></a>

```java
public java.lang.String getPrivateEndpointIpAddressInput();
```

- *Type:* java.lang.String

---

##### `privateLinkIdInput`<sup>Optional</sup> <a name="privateLinkIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkIdInput"></a>

```java
public java.lang.String getPrivateLinkIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

---

##### `gcpProjectId`<sup>Required</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.gcpProjectId"></a>

```java
public java.lang.String getGcpProjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateEndpointIpAddress`<sup>Required</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateEndpointIpAddress"></a>

```java
public java.lang.String getPrivateEndpointIpAddress();
```

- *Type:* java.lang.String

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.privateLinkId"></a>

```java
public java.lang.String getPrivateLinkId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceConfig <a name="PrivatelinkEndpointServiceConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointServiceConfig;

PrivatelinkEndpointServiceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .endpointServiceId(java.lang.String)
    .privateLinkId(java.lang.String)
    .projectId(java.lang.String)
    .providerName(java.lang.String)
//  .endpoints(IResolvable)
//  .endpoints(java.util.List<PrivatelinkEndpointServiceEndpoints>)
//  .gcpProjectId(java.lang.String)
//  .id(java.lang.String)
//  .privateEndpointIpAddress(java.lang.String)
//  .timeouts(PrivatelinkEndpointServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoint_service_id PrivatelinkEndpointService#endpoint_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateLinkId">privateLinkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_link_id PrivatelinkEndpointService#private_link_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#project_id PrivatelinkEndpointService#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#provider_name PrivatelinkEndpointService#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpoints">endpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.gcpProjectId">gcpProjectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#gcp_project_id PrivatelinkEndpointService#gcp_project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#id PrivatelinkEndpointService#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_endpoint_ip_address PrivatelinkEndpointService#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoint_service_id PrivatelinkEndpointService#endpoint_service_id}.

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateLinkId"></a>

```java
public java.lang.String getPrivateLinkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_link_id PrivatelinkEndpointService#private_link_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#project_id PrivatelinkEndpointService#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#provider_name PrivatelinkEndpointService#provider_name}.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.endpoints"></a>

```java
public java.lang.Object getEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoints PrivatelinkEndpointService#endpoints}

---

##### `gcpProjectId`<sup>Optional</sup> <a name="gcpProjectId" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.gcpProjectId"></a>

```java
public java.lang.String getGcpProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#gcp_project_id PrivatelinkEndpointService#gcp_project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#id PrivatelinkEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointIpAddress`<sup>Optional</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.privateEndpointIpAddress"></a>

```java
public java.lang.String getPrivateEndpointIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#private_endpoint_ip_address PrivatelinkEndpointService#private_endpoint_ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceConfig.property.timeouts"></a>

```java
public PrivatelinkEndpointServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#timeouts PrivatelinkEndpointService#timeouts}

---

### PrivatelinkEndpointServiceEndpoints <a name="PrivatelinkEndpointServiceEndpoints" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointServiceEndpoints;

PrivatelinkEndpointServiceEndpoints.builder()
//  .endpointName(java.lang.String)
//  .ipAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoint_name PrivatelinkEndpointService#endpoint_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#ip_address PrivatelinkEndpointService#ip_address}. |

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#endpoint_name PrivatelinkEndpointService#endpoint_name}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#ip_address PrivatelinkEndpointService#ip_address}.

---

### PrivatelinkEndpointServiceTimeouts <a name="PrivatelinkEndpointServiceTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointServiceTimeouts;

PrivatelinkEndpointServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#create PrivatelinkEndpointService#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#delete PrivatelinkEndpointService#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#create PrivatelinkEndpointService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.21.3/docs/resources/privatelink_endpoint_service#delete PrivatelinkEndpointService#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceEndpointsList <a name="PrivatelinkEndpointServiceEndpointsList" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointServiceEndpointsList;

new PrivatelinkEndpointServiceEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.get"></a>

```java
public PrivatelinkEndpointServiceEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>>

---


### PrivatelinkEndpointServiceEndpointsOutputReference <a name="PrivatelinkEndpointServiceEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointServiceEndpointsOutputReference;

new PrivatelinkEndpointServiceEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetEndpointName"></a>

```java
public void resetEndpointName()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceEndpoints">PrivatelinkEndpointServiceEndpoints</a>

---


### PrivatelinkEndpointServiceTimeoutsOutputReference <a name="PrivatelinkEndpointServiceTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.privatelink_endpoint_service.PrivatelinkEndpointServiceTimeoutsOutputReference;

new PrivatelinkEndpointServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointService.PrivatelinkEndpointServiceTimeouts">PrivatelinkEndpointServiceTimeouts</a>

---



