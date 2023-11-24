# `data_mongodbatlas_privatelink_endpoint_service`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_privatelink_endpoint_service`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service).

# `dataMongodbatlasPrivatelinkEndpointService` Submodule <a name="`dataMongodbatlasPrivatelinkEndpointService` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasPrivatelinkEndpointService <a name="DataMongodbatlasPrivatelinkEndpointService" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service mongodbatlas_privatelink_endpoint_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointService;

DataMongodbatlasPrivatelinkEndpointService.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#endpoint_service_id DataMongodbatlasPrivatelinkEndpointService#endpoint_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.privateLinkId">privateLinkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#private_link_id DataMongodbatlasPrivatelinkEndpointService#private_link_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#project_id DataMongodbatlasPrivatelinkEndpointService#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#provider_name DataMongodbatlasPrivatelinkEndpointService#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#id DataMongodbatlasPrivatelinkEndpointService#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.endpointServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#endpoint_service_id DataMongodbatlasPrivatelinkEndpointService#endpoint_service_id}.

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.privateLinkId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#private_link_id DataMongodbatlasPrivatelinkEndpointService#private_link_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#project_id DataMongodbatlasPrivatelinkEndpointService#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.providerName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#provider_name DataMongodbatlasPrivatelinkEndpointService#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#id DataMongodbatlasPrivatelinkEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointService;

DataMongodbatlasPrivatelinkEndpointService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointService;

DataMongodbatlasPrivatelinkEndpointService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointService;

DataMongodbatlasPrivatelinkEndpointService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointService;

DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataMongodbatlasPrivatelinkEndpointService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataMongodbatlasPrivatelinkEndpointService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataMongodbatlasPrivatelinkEndpointService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasPrivatelinkEndpointService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.awsConnectionStatus">awsConnectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.azureStatus">azureStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.deleteRequested">deleteRequested</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList">DataMongodbatlasPrivatelinkEndpointServiceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.gcpStatus">gcpStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.interfaceEndpointId">interfaceEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateEndpointConnectionName">privateEndpointConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateEndpointIpAddress">privateEndpointIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateEndpointResourceId">privateEndpointResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.endpointServiceIdInput">endpointServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateLinkIdInput">privateLinkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.providerNameInput">providerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateLinkId">privateLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `awsConnectionStatus`<sup>Required</sup> <a name="awsConnectionStatus" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.awsConnectionStatus"></a>

```java
public java.lang.String getAwsConnectionStatus();
```

- *Type:* java.lang.String

---

##### `azureStatus`<sup>Required</sup> <a name="azureStatus" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.azureStatus"></a>

```java
public java.lang.String getAzureStatus();
```

- *Type:* java.lang.String

---

##### `deleteRequested`<sup>Required</sup> <a name="deleteRequested" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.deleteRequested"></a>

```java
public IResolvable getDeleteRequested();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.endpoints"></a>

```java
public DataMongodbatlasPrivatelinkEndpointServiceEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList">DataMongodbatlasPrivatelinkEndpointServiceEndpointsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `gcpStatus`<sup>Required</sup> <a name="gcpStatus" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.gcpStatus"></a>

```java
public java.lang.String getGcpStatus();
```

- *Type:* java.lang.String

---

##### `interfaceEndpointId`<sup>Required</sup> <a name="interfaceEndpointId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.interfaceEndpointId"></a>

```java
public java.lang.String getInterfaceEndpointId();
```

- *Type:* java.lang.String

---

##### `privateEndpointConnectionName`<sup>Required</sup> <a name="privateEndpointConnectionName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateEndpointConnectionName"></a>

```java
public java.lang.String getPrivateEndpointConnectionName();
```

- *Type:* java.lang.String

---

##### `privateEndpointIpAddress`<sup>Required</sup> <a name="privateEndpointIpAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateEndpointIpAddress"></a>

```java
public java.lang.String getPrivateEndpointIpAddress();
```

- *Type:* java.lang.String

---

##### `privateEndpointResourceId`<sup>Required</sup> <a name="privateEndpointResourceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateEndpointResourceId"></a>

```java
public java.lang.String getPrivateEndpointResourceId();
```

- *Type:* java.lang.String

---

##### `endpointServiceIdInput`<sup>Optional</sup> <a name="endpointServiceIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.endpointServiceIdInput"></a>

```java
public java.lang.String getEndpointServiceIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateLinkIdInput`<sup>Optional</sup> <a name="privateLinkIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateLinkIdInput"></a>

```java
public java.lang.String getPrivateLinkIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.providerNameInput"></a>

```java
public java.lang.String getProviderNameInput();
```

- *Type:* java.lang.String

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.privateLinkId"></a>

```java
public java.lang.String getPrivateLinkId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasPrivatelinkEndpointServiceConfig <a name="DataMongodbatlasPrivatelinkEndpointServiceConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointServiceConfig;

DataMongodbatlasPrivatelinkEndpointServiceConfig.builder()
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
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.endpointServiceId">endpointServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#endpoint_service_id DataMongodbatlasPrivatelinkEndpointService#endpoint_service_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.privateLinkId">privateLinkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#private_link_id DataMongodbatlasPrivatelinkEndpointService#private_link_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#project_id DataMongodbatlasPrivatelinkEndpointService#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.providerName">providerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#provider_name DataMongodbatlasPrivatelinkEndpointService#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#id DataMongodbatlasPrivatelinkEndpointService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpointServiceId`<sup>Required</sup> <a name="endpointServiceId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.endpointServiceId"></a>

```java
public java.lang.String getEndpointServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#endpoint_service_id DataMongodbatlasPrivatelinkEndpointService#endpoint_service_id}.

---

##### `privateLinkId`<sup>Required</sup> <a name="privateLinkId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.privateLinkId"></a>

```java
public java.lang.String getPrivateLinkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#private_link_id DataMongodbatlasPrivatelinkEndpointService#private_link_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#project_id DataMongodbatlasPrivatelinkEndpointService#project_id}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#provider_name DataMongodbatlasPrivatelinkEndpointService#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.13.1/docs/data-sources/privatelink_endpoint_service#id DataMongodbatlasPrivatelinkEndpointService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasPrivatelinkEndpointServiceEndpoints <a name="DataMongodbatlasPrivatelinkEndpointServiceEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointServiceEndpoints;

DataMongodbatlasPrivatelinkEndpointServiceEndpoints.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasPrivatelinkEndpointServiceEndpointsList <a name="DataMongodbatlasPrivatelinkEndpointServiceEndpointsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList;

new DataMongodbatlasPrivatelinkEndpointServiceEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.get"></a>

```java
public DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference <a name="DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.mongodbatlas.data_mongodbatlas_privatelink_endpoint_service.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference;

new DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.serviceAttachmentName">serviceAttachmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpoints">DataMongodbatlasPrivatelinkEndpointServiceEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentName`<sup>Required</sup> <a name="serviceAttachmentName" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.serviceAttachmentName"></a>

```java
public java.lang.String getServiceAttachmentName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpointsOutputReference.property.internalValue"></a>

```java
public DataMongodbatlasPrivatelinkEndpointServiceEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasPrivatelinkEndpointService.DataMongodbatlasPrivatelinkEndpointServiceEndpoints">DataMongodbatlasPrivatelinkEndpointServiceEndpoints</a>

---



